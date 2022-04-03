import * as jose from 'jose';

const pubKeys = {
	'6a4f87ff5d93fa6ea03e5c6e88eea0acd2a232a9':
		'-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIISda/BKjOMzcwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjIw\nNDAxMDkzODM2WhcNMjIwNDE3MjE1MzM2WjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBANNfr00tD2ZxJwyCihEZEZ0q4/22996UR4As0hwVrHBru3wN\nRlBlIt94pgI19roGFDSURHqLOLrMMEovjRF7Wu8aoP3YBAuTTw3gF5NUJRDUNGam\nkCvPxppkI66L5Epu7hsQ9Tm/ZHkqKMVuj8XJAf9B3tmMIfWr7NskrZ5ozbPwegKP\nznLxgdTk2U0tp2PZYY4UwtYoz9wCQBAX+IZzx0gDd5L7zIJVNCU+9bRyYNnYOepr\njMlpJt4Y4Xq7CkpvxQiYMWuv8ayCwfTpNVOPGHpVAtsVJ9kvVbte/8lJ19DMa5f8\nzNV2d7VVDqYTgz0V2twg+tD5jgKY9e5GjM3sX/ECAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAM4mzDMogPItHcIaGKas2nwQDC17WtSv6XTTh/sHTz2q\nYqfLcq8KhFpi4VpoT9VoNFHLYgkH3FU6cJKIV1EqecfIeDxcF4uSs8+svbdNO3x6\nLvwY8U0uXUhdw6+UZJMqP/l4Dws1MYFuLAyBVEzHNwzJJqCGGmIFXR4AoeYigBrR\nU6dFfkdN9xnUU2gMrnBpq7u6bsmHDKBOs6W41hnOBtu5E3y0VLabw72KsKZWggLR\n+h1sFxX0nQR0jB/C42e8CMfhK/zvjTJhuYdDc1vnDWlDYCSg7f2WJ/MpmhXXchck\nC2BtSptRri93pi4puX11V3wGCokHceHZXjVhUcTYCik=\n-----END CERTIFICATE-----\n',
	'464117ac396bc71c8c59fb519f013e2b5bb6c6e1':
		'-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIICjdoFQah++cwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjIw\nMzI0MDkzODM2WhcNMjIwNDA5MjE1MzM2WjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBALSIsuZRzmDcpytCEpUItLXuklhVBRRhB+959Vp2qXTomcdn\nOAZvUtn9oi9lhHY5CmKpBIx15SEaLBeZoYNY6lOGharr7JoXT9sqnaGMmH9rub77\nMMyNyI9BrnPANSvV2pgzenoJ9z5e5nfX+s4bo24z+6Ch7w7Ju7OkKMVSmaUJhAw4\ngXMgnOiFJjJLAYTtIeNZQ+MxR2Q8ZhKd/wd4NBCad0PNDrlAQ84u4jFJLSdtptKp\nMm9FyQ0ZY61bErX4opVAnu02gLNIxnb1+Vm6eIwMNaxOYwxwRCa6QBRGjWj0DqEY\nrvjgTWbpFIUmnJCI83W3qpsLZv+yD6AKd5M962ECAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAHQj+ALKQMxlIIY509KnxXR9QunYFGWMSj0LEb3AMaLK\nPfumga2xcIFgK9WeLBsFDlfwsDvdl9pJIaUE7dchivKYaMITePqZxmb12Y8oe+ud\nA7f2EkO0cvRx8LW+ciM8kKB7Aok5NCRxZC7PpBiQsNyNic1AwM7/XDaMG1uxMKf0\nbcVi67B70gMaEctECbWGFycGdE4el2PBpV8YPnSSS/pldrfPkznY4RQsa2ghzlqR\nc8VafKepWZemFKjqCslPLIrxdJBexHQvb9V/thoIczUxOFDEP/ZkoCVhMOYPtjlI\nZna/ha+S+aNT1VIVEh+fdjJv697TRPSf8VXl3k6b43M=\n-----END CERTIFICATE-----\n'
};

export default [
    jose.importX509(pubKeys['464117ac396bc71c8c59fb519f013e2b5bb6c6e1'], "RS256"),
    jose.importX509(pubKeys['6a4f87ff5d93fa6ea03e5c6e88eea0acd2a232a9'], "RS256")
]