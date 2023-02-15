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
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjY2NjM3ZDgtMjhlMS00Zjk3LTkzNzMtNzIzYTRmOTM3ZjYzLyIsImlhdCI6MTY3NjQ1MDcwMSwibmJmIjoxNjc2NDUwNzAxLCJleHAiOjE2NzY0NTQ2NTQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFkSWFxcUdmdGc0WklyOXJHOStSNXpVRHRlQytmM2h2dDNOVytJWlZSd3Fia2NtSEF5R2Q0MmhUZkpxVHBya2xsIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQXppeiIsImdpdmVuX25hbWUiOiJNYWppZCIsImlwYWRkciI6IjcyLjI1NS41OC41MCIsIm5hbWUiOiJNYWppZCAgQXppeiIsIm9pZCI6IjM3Yzc3MjViLWFkMWUtNGQ4YS04MjU2LWU4YmU2NjA1ZmE1OCIsInB1aWQiOiIxMDAzMjAwMjczNzQyRkVDIiwicmgiOiIwLkFVNEEyRGRtdHVFb2wwLVRjM0k2VDVOX1l3a0FBQUFBQUFBQXdBQUFBQUFBQUFDREFJby4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiIwRzZEVjlTTVI4Ykx0WTcxaDF6emRNNElWajlxaW1WbmxZdHFiSTk0YVU4IiwidGlkIjoiYjY2NjM3ZDgtMjhlMS00Zjk3LTkzNzMtNzIzYTRmOTM3ZjYzIiwidW5pcXVlX25hbWUiOiJtb3hpbGkyODAxQG90YW5ob21lLmNvbSIsInVwbiI6Im1veGlsaTI4MDFAb3RhbmhvbWUuY29tIiwidXRpIjoiUlZ2Y1pDV1BYa0tCZGIzcFBod21BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.mxvtf09_J6TjbKJGEaTmYkU0YJTGah4GjOSLYSGqJq0PAgdJOCi5EoD_EUniMxDvmXOcz0I37GxqXLIPNY2YK6nsdTIfSzpuoUg8Hv0RUhRaCs11OGkb4yfG2wV_Z-tcSIVqgo72EMdI_18H8DAE_wvHjBN-yKMFpHlWcRillLf4vICjGg269rExie-_E1-BKMU9v4_mnW6Cp-KnGIiM_NaoDvEQyWMzpPDZGGg2QZ5nJyBJfD7Tprwn4W2-2PCuAxRLY7OJWR2xQ1LAgqZJ76VX-xqw5GsBJh8Sg6G1ynoFcmJn77NSL7BtPwGvhs5BnEvKjL_uJkBAqMNVLuv8pg',
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