import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../api/dataService.js";
import { renderer } from "../common/render.js";
import { userHelper } from "../common/userHelper.js";

const browseTeamTemp = (hasUser, data) => html`
<section id="browse">

<article class="pad-med">
    <h1>Team Browser</h1>
</article>

${hasUser && html`
<article class="layout narrow">
    <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
</article>
`}

${data.map(cardTemp)}

</section>
`;

const cardTemp = (item) => html`
<article class="layout">
    <img src="../../${item.logoUrl}" class="team-logo left-col">
    <div class="tm-preview">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <span class="details">???</span>
        <div><a href="/details/${item._id}" class="action">See details</a></div>
    </div>
</article>
`;

export async function showBrowseTeamView() {
    const hasUser = userHelper.getUserData();
    const data = await dataService.getAllTeams();
    renderer(browseTeamTemp(hasUser, data));
}