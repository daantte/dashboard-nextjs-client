export const GuildSelectCard = ({ guild }) => {
  return (
    <div className="flex" key={guild.id}>
      <div>{guild.name}</div>
      <a className="ml-2 font-bold" href={`/dashboard/server/${guild.id}`}>
        Go
      </a>
    </div>
  );
};
