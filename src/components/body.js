function Body ({users}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                {users.map(user => <p className="card-text">{user.name.first} {user.name.last}</p>)}
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    );
}

export default Body;