import { FunctionComponent, useEffect, useState } from "react";
import QRCode from 'qrcode.react';
import { Container, Box, Button } from '@mui/material';

interface CodeProps {
  value: string;
}

const Code: FunctionComponent<CodeProps> = (props) => {
  const { value } = props;
  const [QRLink, setQRLink] = useState('')


  // // get the schema id
  // const getSchemaid = async () => {
  //   const authRequest = await fetch('http://192.168.1.7:6543/v1/credentials/{id}')
  //   const res = await authRequest.json()
  //   setDid(res.from)
  // }

  // get the QR link data 
  const getQRLink = async () => {
    const authRequest = await fetch(`http://localhost:3002/v1/credentials/{schemeaId_goes_here}/qrcode`)
    const res = await authRequest.json()
    console.log("this is Qr link ", res.qrCodeLink)
    setQRLink(res.qrCodeLink)
  }

  const dispachEvent = () => {
    const _authEvent = new CustomEvent('authEvent', { detail: QRLink });
    document.dispatchEvent(_authEvent);
  }

  useEffect(() => {
    getQRLink();
  }, [])

  return (
    <Container>
      <Box sx={{ width: [400] }}>
        <QRCode level={"L"} size={400} value={QRLink} />
      </Box>
      <Button onClick={() => dispachEvent()}
        variant="contained" size="large" sx={{
          width: "100%",
          marginTop: "15px"
        }}> Polygon ID </Button>
    </Container>
  );
};


export default Code;
