
function HostInfo({ host }) {
    const [firstName, lastName] = host.name.split(' ');
    
    return (
      <div className="host-info">
        <h1 className="host-logement">
          {firstName}<br />
          {lastName}
        </h1>
        <img src={host.picture} alt={host.name} />
      </div>
    );
  }
  
  export default HostInfo;