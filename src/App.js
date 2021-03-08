import React from "react";
import Header from './components/header.js';
import Body from './components/body.js';

class App extends React.Component {
  state = {
    users: [
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Sebastian",
          "last": "Cox"
        },
        "location": {
          "street": {
            "number": 3718,
            "name": "Rectory Lane"
          },
          "city": "Lisburn",
          "state": "Suffolk",
          "country": "United Kingdom",
          "postcode": "LU2K 3NJ",
          "coordinates": {
            "latitude": "7.9786",
            "longitude": "-165.9988"
          },
          "timezone": {
            "offset": "-3:00",
            "description": "Brazil, Buenos Aires, Georgetown"
          }
        },
        "email": "sebastian.cox@example.com",
        "login": {
          "uuid": "d255b7db-dcae-497d-ab8d-266d646e0701",
          "username": "orangeswan246",
          "password": "pharmacy",
          "salt": "ZVQ6LBY6",
          "md5": "064bda5aec8cf972f82c05dbb76729c9",
          "sha1": "0b58cbffc60115ad558a0046f9a3f8dbdf329203",
          "sha256": "a7a8ccec3d69fb5714695778ba092007b8206b9e1c61354e5083a68d1dd9c1aa"
        },
        "dob": {
          "date": "1967-07-25T21:22:25.388Z",
          "age": 54
        },
        "registered": {
          "date": "2009-06-20T11:50:13.704Z",
          "age": 12
        },
        "phone": "024 3738 1752",
        "cell": "0738-171-204",
        "id": {
          "name": "NINO",
          "value": "MH 72 26 43 M"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/81.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/81.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/81.jpg"
        },
        "nat": "GB"
      }
    ]
  }

  render() {
    return(
      <div className="container">
        <Header />
        <Body users={this.state.users}/>
      </div>
    )
  };
}

export default App;
