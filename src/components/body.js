import React from 'react';

function Body ({users, search}) {
    console.log(users);
    return (
        <div className="card">            
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 m-0">
                    {
                        users.map(user => 
                        <div className="card-body">
                            <p className="card-text">{user.name.first} {user.name.last} {user.email} {user.phone}</p>
                        </div>)
                        .filter(user => (
                            user.name.first.includes(search)).map(filteredName => (
                            <p className="card-text">{filteredName.first} {filteredName.last} {filteredName.email} {filteredName.phone}</p>)
                        ))
                    }
                </div>       
        </div>
    );
}

export default Body;