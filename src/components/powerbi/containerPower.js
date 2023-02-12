import React from 'react'
import '../invoices/invoice.css'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from "powerbi-client";
import axios from 'axios';

const ContainerPower = () => {

    // async function refreshToken() {
    //     const response = await axios.post('https://login.microsoftonline.com/common/oauth2/token', {
    //         grant_type: 'refresh_token',
    //         client_id: '0691ed44-f782-47d4-ae1c-0ceeff768318',
    //         client_secret: 'KCV8Q~SovBYGc23bEMYYp7WhF1sQpK6huLiPAcOI',
    //         refresh_token: 'your_refresh_token'
    //     });

    //     // KCV8Q~SovBYGc23bEMYYp7WhF1sQpK6huLiPAcOI

    //     // tenantid: b66637d8 - 28e1 - 4f97 - 9373 - 723a4f937f63

    //     return response.data.access_token;
    // }

    // async function getData() {
    //     const token = await refreshToken();
    //     const response = await axios.get('https://api.powerbi.com/v1.0/myorg/datasets', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     });

    //     return response.data;
    // }


    return (
        <>
            <h3>Container</h3>
            <PowerBIEmbed
                embedConfig={{
                    type: 'report',
                    id: '1c25d566-270b-47d0-aa84-3ea5b48a265e',
                    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=1c25d566-270b-47d0-aa84-3ea5b48a265e&groupId=40fafbbf-9c76-4e01-9b1e-e2f210ec22e6&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUUtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjY2NjM3ZDgtMjhlMS00Zjk3LTkzNzMtNzIzYTRmOTM3ZjYzLyIsImlhdCI6MTY3NjIwMzk3MiwibmJmIjoxNjc2MjAzOTcyLCJleHAiOjE2NzYyMDgyODksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFhYk1kYW1DRlpPS296Z1Z0MzF0Tjl6QitOKzErakpQd3lIWm9BMW0rNTR4cytocWprR1BPVnlLVEMzWW45eHhXIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQXppeiIsImdpdmVuX25hbWUiOiJNYWppZCIsImlwYWRkciI6IjExOS4xNTcuNjcuNTAiLCJuYW1lIjoiTWFqaWQgIEF6aXoiLCJvaWQiOiIzN2M3NzI1Yi1hZDFlLTRkOGEtODI1Ni1lOGJlNjYwNWZhNTgiLCJwdWlkIjoiMTAwMzIwMDI3Mzc0MkZFQyIsInJoIjoiMC5BVTRBMkRkbXR1RW9sMC1UYzNJNlQ1Tl9Zd2tBQUFBQUFBQUF3QUFBQUFBQUFBQ0RBSW8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiMEc2RFY5U01SOGJMdFk3MWgxenpkTTRJVmo5cWltVm5sWXRxYkk5NGFVOCIsInRpZCI6ImI2NjYzN2Q4LTI4ZTEtNGY5Ny05MzczLTcyM2E0ZjkzN2Y2MyIsInVuaXF1ZV9uYW1lIjoibW94aWxpMjgwMUBvdGFuaG9tZS5jb20iLCJ1cG4iOiJtb3hpbGkyODAxQG90YW5ob21lLmNvbSIsInV0aSI6IkFXTkI2eHZzM1UyVl9tOUlnUFlzQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.O_lkIDwXIScCLoP1-zlzX0asUHlE8IPpprTIU9XovR4VAlu8QaQ3qUO7zyAXLtdzXrL9iVg8trT6bprQmwncAnB5hc9vmeH5ZBx0nuE8nuZpgno3ZvXWnwbxnRLMpy5bHZRHKrM9cy1CJ-GeJTtEJ4HKB0u9mXeJPh8UslvH49OgNrD77Fh3QdCgU5VRS-G75pUk2KkGrpxYFKiQDRgx1jDEsZownMk0hfacrofdE7SQNCh-3RejHuqOv8quDMa86aKO2nPzyPjDOnVHoOUJdTSDqStWjH-D92sFliMfebQhKZ7_Y7kl8wDt8bbj9oRjXGdqmHDfjPIZM71b1wBeUw',
                    tokenType: models.TokenType.Aad,
                    settings: {
                        panes: {
                            filters: {
                                expanded: false,
                                visible: true
                            }
                        },
                    }
                }}

                eventHandlers={
                    new Map([
                        ['loaded', function () { console.log('Report loaded'); }],
                        ['rendered', function () { console.log('Report rendered'); }],
                        ['error', function (event) { console.log(event.detail); }]
                    ])
                }

                cssClassName={"Embed-container"}

                getEmbeddedComponent={(embeddedReport) => {
                    window.report = embeddedReport;
                }}
            />
        </>
    )
}

export default ContainerPower;