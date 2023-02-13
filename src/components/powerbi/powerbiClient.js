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
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjY2NjM3ZDgtMjhlMS00Zjk3LTkzNzMtNzIzYTRmOTM3ZjYzLyIsImlhdCI6MTY3NjI4MzIwNCwibmJmIjoxNjc2MjgzMjA0LCJleHAiOjE2NzYyODg4ODksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUF3U1p6TTJwbzNacCtTTElrenlZeDUwMEFKSk5jN1g2RDFPM24rSmVISGJxMlJhbFVrTGswaGdnZllLcTk0dTE5IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQXppeiIsImdpdmVuX25hbWUiOiJNYWppZCIsImlwYWRkciI6IjExOS4xNTcuNjcuNTAiLCJuYW1lIjoiTWFqaWQgIEF6aXoiLCJvaWQiOiIzN2M3NzI1Yi1hZDFlLTRkOGEtODI1Ni1lOGJlNjYwNWZhNTgiLCJwdWlkIjoiMTAwMzIwMDI3Mzc0MkZFQyIsInJoIjoiMC5BVTRBMkRkbXR1RW9sMC1UYzNJNlQ1Tl9Zd2tBQUFBQUFBQUF3QUFBQUFBQUFBQ0RBSW8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiMEc2RFY5U01SOGJMdFk3MWgxenpkTTRJVmo5cWltVm5sWXRxYkk5NGFVOCIsInRpZCI6ImI2NjYzN2Q4LTI4ZTEtNGY5Ny05MzczLTcyM2E0ZjkzN2Y2MyIsInVuaXF1ZV9uYW1lIjoibW94aWxpMjgwMUBvdGFuaG9tZS5jb20iLCJ1cG4iOiJtb3hpbGkyODAxQG90YW5ob21lLmNvbSIsInV0aSI6InM5V1UxUUpDQTBldzFoZHdBdE5NQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.Y4I20rnwxq-gW9Tdfb1NoquallH6F2YqSP1WaHdJZwohr5DBgdLIC5Ztdu1cnkMXECZi8dXxu2OPEnbIM0RpYtxYEAjGnUYC0pqJdeY8PkqZLJj8HcP9RB2IWveMjg0k9Ym813VBOdvFxqcMGRaCJCeU45Vr5u3yJKW4gtoU1FxoHEshOuQLsDzu61KOVowldOXsGAYpQW9crmCR2nucHVTulxDMKugPUxHRkWWhRYSBhhfpQrVfPceyXfHGRLbJ0GOHftyiLCjbEJGtI6YsmGNcSuwUgTN_1MS0OJ2CyomNbHwhXMLL1vXb3ri5NTkI46hJzIC83rnzeRPMacEvKA',
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
