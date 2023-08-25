import { fetchMutualGuilds } from "../../../utils/api";
// import { Guild } from "../../../../utils/types";
import { GuildSelectCard } from "../../../components/server-select/GuildSelectCard";

/** *
  @typedef Guild
  @prop {string} id
  @prop {string} name
  @prop {string} icon
  @prop {boolean} owner
  @prop {string} permissions
  @prop {string[]} features

  @typedef Props 
  @prop {Guild[]} guilds
*/

const ServerSelectPage = ({ guilds }) => {
  var renderedOutput = guilds.map((g) => (
    <GuildSelectCard guild={g} key={g.id} />
  ));

  return <div className="page">{renderedOutput}</div>;
};

export async function getServerSideProps(context) {
  let guilds = await fetchMutualGuilds(context);
  // console.log(guilds.props.guilds[0]);
  return guilds;
}

export default ServerSelectPage;
