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
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjY2NjM3ZDgtMjhlMS00Zjk3LTkzNzMtNzIzYTRmOTM3ZjYzLyIsImlhdCI6MTY3NjI3MzUxNCwibmJmIjoxNjc2MjczNTE0LCJleHAiOjE2NzYyNzg1MTksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFtUmZWY2NkLzJobEJ6OUZYZXVPRGVKODFrWmFLZ1JDbEhnR1B2RXdFMXhqMDA2eThGNWN5UXREb3pEZ3RuMUpiIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQXppeiIsImdpdmVuX25hbWUiOiJNYWppZCIsImlwYWRkciI6IjExOS4xNTcuNjcuNTAiLCJuYW1lIjoiTWFqaWQgIEF6aXoiLCJvaWQiOiIzN2M3NzI1Yi1hZDFlLTRkOGEtODI1Ni1lOGJlNjYwNWZhNTgiLCJwdWlkIjoiMTAwMzIwMDI3Mzc0MkZFQyIsInJoIjoiMC5BVTRBMkRkbXR1RW9sMC1UYzNJNlQ1Tl9Zd2tBQUFBQUFBQUF3QUFBQUFBQUFBQ0RBSW8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiMEc2RFY5U01SOGJMdFk3MWgxenpkTTRJVmo5cWltVm5sWXRxYkk5NGFVOCIsInRpZCI6ImI2NjYzN2Q4LTI4ZTEtNGY5Ny05MzczLTcyM2E0ZjkzN2Y2MyIsInVuaXF1ZV9uYW1lIjoibW94aWxpMjgwMUBvdGFuaG9tZS5jb20iLCJ1cG4iOiJtb3hpbGkyODAxQG90YW5ob21lLmNvbSIsInV0aSI6ImNfc2NyM3JMLUVTRjRTblNyWjVLQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.JuAxcoP_0MeYlX1B_-vhcCOUI5qFEfx-QZhj7wIkqG_JrhicJ4BeVkaO8kCQWVok1aNzAn5u6K2CtLfSixSmdrfGKMP7fd18w0nr80TFWJmP-vkiABMfD_becoEPUbu1_945mEfGGqkX9NTd7O-ZGMeA6yz8nPMZIPe9fhjM19YjMMnMeDgZpI-SJOV1ZTZ0P2FRNStV6vn7prOK2ymD2Y5fY3g0X3KBjjviTOvWN0qHZASRMo8HE4dyj51P0fiXYIN3yxPJpwysVKVNNQT3K9HGZmckhVGhTBXsi4kyPlEIuaJ4MYifViOnZ-xI2_vxQGl52HjP8lz-o9p5dfCQMw',
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