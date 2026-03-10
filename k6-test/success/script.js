import http from 'k6/http';
import { check, sleep } from 'k6';
import exec from 'k6/execution';

const tokens = [
    "d485ef61-2904-49e1-824e-081f8ca409a4",
    "dbf88962-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf890f6-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf89394-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf894fc-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf89614-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf89722-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf89830-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf89952-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf89a60-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf89b78-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf89c86-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf89d94-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf89ea2-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf89fb0-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8a0b4-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8a1c2-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8a2d0-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8a3d4-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8a4f6-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8a604-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8a712-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8a816-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8a91a-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8aa6e-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8ab90-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8aca8-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8adf2-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8af14-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8b018-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8b126-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8b234-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8b338-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8b450-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8b554-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8b662-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8b770-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8b900-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8ba2c-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8bb3a-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8bc48-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8bd56-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8bea0-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8bfae-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c0bc-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c1ca-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c2ce-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c3dc-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c4b8-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c558-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c60c-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c6b6-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c760-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c800-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c8a0-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c94a-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8c9ea-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8ca8a-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8cb34-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8cbd4-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8cc7e-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8cd1e-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8cdc8-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8ce68-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8cf08-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8cfb2-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d05c-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d0fc-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d1a6-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d246-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d2e6-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d386-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d494-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d53e-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d5de-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d67e-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d71e-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d7be-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d868-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d912-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8d9bc-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8da5c-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8dafc-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8dba6-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8dc46-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8dce6-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8dd86-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8de26-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8ded0-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8df7a-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8e01a-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8e0ba-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8e15a-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8e1fa-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8e29a-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8e33a-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8e3e4-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8e484-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8e538-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8e5d8-1c8f-11f1-ac5d-6136eaf2fe23",
    "dbf8e682-1c8f-11f1-ac5d-6136eaf2fe23"
];

export const options = {
    vus: 101,
    duration: '60s',
    thresholds: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.1'],
        'checks{check_name:Rate Limit Check}': ['rate>0.99']
    }
};

export default function () {
    const vuId = __VU - 1;

    const token = tokens[vuId % tokens.length];

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token,
    }
    const url = 'http://localhost:3000/api/users/current';

    const responses = http.batch([
        ['GET', url, null, { headers }],
        ['GET', url, null, { headers }]
    ]);

    check(responses[0], {
        'Req 1 status is 200': (r) => r.status === 200,
        'Req 1 res time < 2000ms': (r) => r.timings.duration < 2000,
        'Rate Limit Check': (r) => r.status !== 429,
    });

    check(responses[1], {
        'Req 2 status is 200': (r) => r.status === 200,
        'Req 2 res time < 2000ms': (r) => r.timings.duration < 2000,
        'Rate Limit Check': (r) => r.status !== 429,
    });

    sleep(1);
}

export function setup() {
    console.log('Starting performance test...');
    console.log('Target: http://localhost:3000/api/api/current');
    console.log(`Total VUs: ${options.vus}`);
    console.log(`Test duration: ${options.duration}`);
    console.log(`Total tokens avail: ${tokens.length}`);
}

export function teardown() {
    console.log('Performance test completed');
}