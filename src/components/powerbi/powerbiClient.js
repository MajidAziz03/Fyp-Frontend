import axios from "axios";
import React, { useState, useEffect } from "react";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from "powerbi-client";
import '../invoices/invoice.css'

const ClientPower = () => {

    return (
        <>
            <h3> Clients </h3>
            <PowerBIEmbed
                embedConfig={{
                    type: 'report',
                    id: '809916d8-722b-4ab8-a757-29ee45d875c2',
                    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=809916d8-722b-4ab8-a757-29ee45d875c2&groupId=96e91e79-74cb-45ad-a014-2d5c5a6396f4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUUtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjY2NjM3ZDgtMjhlMS00Zjk3LTkzNzMtNzIzYTRmOTM3ZjYzLyIsImlhdCI6MTY3NjE5MTgwOCwibmJmIjoxNjc2MTkxODA4LCJleHAiOjE2NzYxOTU5NzYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUE4NjhvUzhhM29BL3dOTVQ1MXBIQ1VxV3BhY010OU82ZFVib2t0VXRPRnZod2RScVhzSDQzT0pTajR3QTQxLyt3IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQXppeiIsImdpdmVuX25hbWUiOiJNYWppZCIsImlwYWRkciI6IjExOS4xNTcuNjcuNTAiLCJuYW1lIjoiTWFqaWQgIEF6aXoiLCJvaWQiOiIzN2M3NzI1Yi1hZDFlLTRkOGEtODI1Ni1lOGJlNjYwNWZhNTgiLCJwdWlkIjoiMTAwMzIwMDI3Mzc0MkZFQyIsInJoIjoiMC5BVTRBMkRkbXR1RW9sMC1UYzNJNlQ1Tl9Zd2tBQUFBQUFBQUF3QUFBQUFBQUFBQ0RBSW8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiMEc2RFY5U01SOGJMdFk3MWgxenpkTTRJVmo5cWltVm5sWXRxYkk5NGFVOCIsInRpZCI6ImI2NjYzN2Q4LTI4ZTEtNGY5Ny05MzczLTcyM2E0ZjkzN2Y2MyIsInVuaXF1ZV9uYW1lIjoibW94aWxpMjgwMUBvdGFuaG9tZS5jb20iLCJ1cG4iOiJtb3hpbGkyODAxQG90YW5ob21lLmNvbSIsInV0aSI6IkFqdHU3ckNQdVVpMlBSWlVsV29jQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.J46kU38jI-qGhWzlyDtdxnlmPgo9E0bAqjs2_Lxs-npV86KmDKMLnFDnW3MICroHRiau6s1UpeHcyaG0ZHvC_u-B-UXMGy_oBd8AL94Y9UXMAy3CBbWKO441pDIgb_nZ_SMXh1T9sAr6-d8ioXJQ-RFVBksoIQoYq7xB_xGJudBs-g7E9sLWxSNLiO9R5P3ZPjNpRwiUUwGFGmvfH5D2ZBkVieyoDQMigIU6rSlu08j47Be-_alPAWx6BX4yRhFvkdFl5_fsLgt_aslbg31NBI-hWEtuB5zJ6oAr8vi4O1RMxwdzwxSfwYsdaKiN5SNGU0AM4x2RFOte6DXLJrdtDg',
                    tokenType: models.TokenType.Aad,
                    settings: {
                        panes: {
                            filters: {
                                expanded: false,
                                visible: false
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
    );
};

export default ClientPower;
