import React from 'react';

function Body ({users}) {
    return (
        <div className="card">            
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 m-0">
                    {
                        users.map(user => 
                        <div className="card-body">
                            <p className="card-text">{user.name.first} {user.name.last} {user.email} {user.phone}</p>
                        </div>)
                    }
                </div>       
        </div>
    );
}

export default Body;