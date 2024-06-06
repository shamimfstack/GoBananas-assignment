export default function DisplayData({data}) {
    console.log(data);
    
    return (
        <div>
        <ul>
          {data.map(item => <li key={item.id}>{item.username}</li>)}
        </ul>

        <table>
            <tr>
                <th>Sl. No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
            </tr>
            {
                data.map((user, i) => 
                    <tr>
                        <td>{i + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>

                    </tr>
                )
            }
        </table>
      </div>
        );
}