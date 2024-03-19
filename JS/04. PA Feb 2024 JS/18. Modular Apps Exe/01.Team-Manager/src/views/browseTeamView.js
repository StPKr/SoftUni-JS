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
    <img src="./assets/atat.png" class="team-logo left-col">
    <div class="tm-preview">
        <h2>Storm Troopers</h2>
        <p>These ARE the droids we're looking for</p>
        <span class="details">5000 Members</span>
        <div><a href="#" class="action">See details</a></div>
    </div>
</article>
`;

export async function showBrowseTeamView() {
    const hasUser = userHelper.getUserData();
    const data = await dataService.getAllTeams();
    renderer(browseTeamTemp(hasUser, data));
}