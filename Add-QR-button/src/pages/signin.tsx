import { useState, useEffect } from 'react';
import { QRCode } from '@/app/components';
import { useRouter } from 'next/router';
import { Grid, Box, Typography } from '@mui/material';

const MyPage = () => {
  const router = useRouter();

  const [QRData, setQRData] = useState('');
  useEffect(() => {
    let interval: NodeJS.Timer;
    const auth = async () => {
      const authRequest = await fetch('http://192.168.1.7:6543/api/v1/requests/auth');
      const res = JSON.stringify(await authRequest.json())
      setQRData(res);
      console.log(res)

      const sessionID = authRequest.headers.get('x-id');

      interval = setInterval(async () => {
        try {
          const sessionResponse = await fetch(`http://192.168.1.8:6543/api/v1/status?id=${sessionID}`);
          if (sessionResponse.ok) {
            const data = await sessionResponse.json();
            clearInterval(interval)
            router.push(`/claim?userID=${data.id}`);
          }
        } catch (e) {
          console.log('err->', e);
        }
      }, 2000);
    }
    auth();
    return () => clearInterval(interval);
  },
    []);


  return (
    <Grid container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      height="100%">
      <Grid alignItems="center" item xs={3}>
        <Typography variant="h1">
          Scan QR Code
        </Typography>
      </Grid>
      <Grid alignItems="center" item xs={3}>
        <QRCode value={QRData} />
      </Grid>
    </Grid>
  );
};

export default MyPage;