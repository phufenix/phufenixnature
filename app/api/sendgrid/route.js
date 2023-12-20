import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SEND_GRID_API_KEY);

export async function POST(req, res) {
  const data = await req.json();
  try {
    await sendgrid.send({
      to: 'phufenix.nature@gmail.com',
      from: 'phufenix.nature@gmail.com',
      subject: `Masz nowa wiadomosc od ${data.fullname}`,
      html: `<div><p>Imię: ${data.fullname}</p><br/><p>Email: ${data.email}</p><br/><p>Telefon : ${data.phone}</p><br/><div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return Response.json({ error: '' });
}
