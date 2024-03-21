import { renderer } from "../common/render.js";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { userHelper } from "../common/userHelper.js";
import { getParametersId, goTo } from "../common/goTo.js";
import { dataService } from "../api/dataService.js";

const detailsTemp = (hasUser, team, hasOwner, pending, members, memberCount, isPending, isMember) => html`
<section id="team-home">
    <article class="layout">
        <img src="../../${team.logoUrl}" class="team-logo left-col">
        ${hasUser ? userActionTemp(team, memberCount, hasOwner, isPending, isMember) : ''}
        ${memberTemplate(hasOwner, isMember, members)}
        ${hasOwner ? ownerMemberAction(pending, team) : ''}
    </article>
</section>
`;

const userActionTemp = (team, memberCount, hasOwner, isPending, isMember) => html`
<div class="tm-preview">
    <h2>${team.name}</h2>
    <p>${team.description}</p>
    <span class="details">${memberCount} Members</span>
    <div>
        ${hasOwner ? html`<a href="#" class="action">Edit team</a>` : ''}
        ${!isMember && !isPending ? html`<a @click=${onJoinTeam} data-team-id=${team._id} href="#" class="a ction">Join team</a>` : ''}
        ${isMember ? html`<a href="#" class="action invert">Leave team</a>` : ''}
        ${isPending ? html`Membership pending. <a href="#">Cancel request</a>` : ''}
    </div>
</div>
`;

const memberTemplate = (hasOwner, isMember, members) => html`
<div class="pad-large">
    <h3>Members</h3>
    <ul class="tm-members">
        ${isMember ? html`<li>My Username</li>` : ''}
        ${members.map(member => {
    return html`<li>${member.user.username} ${hasOwner ? html`<a href="#" class="tm-control action">Remove from team</a>` : ''}</li>`
})}
    </ul>
</div>
`;

const ownerMemberAction = (pending, team) => html`
<div class="pad-large">
    <h3>Membership Requests</h3>
    <ul class="tm-members">
        ${pending.map(x => html`
        <li>${x.user.username}<a data-user-id=${x.user._id} data-team-id=${team._id} @click=${onApproveUser} href="#" class="tm-control action">Approve</a><a href="#"
                class="tm-control action">Decline</a></li>
        `)}
    </ul>
</div>
`;

export async function showDetailsView(ctx) {
    const userData = userHelper.getUserData();
    const id = ctx.params.id;
    const team = await dataService.getSingleTeam(id);
    const hasOwner = true//userHelper.hasOwner(team._ownerId);
    const teamMember = await dataService.getListMember(team._id);
    const pending = teamMember.filter(x => x.status == 'pending');
    const members = teamMember.filter(x => x.status == 'member');
    const memberCount = members.length;
    const isPending = pending.find(x => x.user._id === userData._id);
    const isMember = members.find(x => x.user._id === userData._id);
    renderer(detailsTemp(!!userData, team, hasOwner, pending, members, memberCount, isPending, isMember));
}

async function onJoinTeam(e) {
    const teamId = e.target.dataset.teamId;
    await dataService.requestToJoin(teamId);
    goTo(`/details/${teamId}`)
}

async function onApproveUser(e) {
    e.preventDefault();
    const userId = e.target.dataset.userId;
    const teamId = e.target.dataset.teamId;
    const data = {
        teamId,
        status: 'member'
    }
    await dataService.approveRequest(userId, data);
}