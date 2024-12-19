// pages/api/sendEmail.ts
// @ts-ignore
import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
    if (req.method === "POST") {
        const { nome, idade, localidade, email, telemovel, objetivo, experiencia_voluntariado, frequencia_voluntariado, atividades, experiencia_animais, alergia_condicao } = req.body;

        // Configurar o transporte de e-mail com SMTP (ajuste com seu servidor SMTP)
        const transporter = nodemailer.createTransport({
            service: "gmail", // ou outro serviço SMTP, como o SendGrid
            auth: {
                user: "seu-email@gmail.com", // seu e-mail
                pass: "sua-senha-ou-app-password", // sua senha ou App Password se usar 2FA
            },
        });

        const mailOptions = {
            from: "seu-email@gmail.com", // E-mail do remetente
            to: "destinatario@email.com", // E-mail do destinatário
            subject: "Novo Cadastro de Voluntário",
            html: `
        <h2>Dados do Voluntário:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Localidade:</strong> ${localidade}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telemóvel:</strong> ${telemovel}</p>
        <p><strong>Objetivo como Voluntário:</strong> ${objetivo}</p>
        <p><strong>Experiência com Voluntariado:</strong> ${experiencia_voluntariado}</p>
        <p><strong>Frequência de Voluntariado:</strong> ${frequencia_voluntariado}</p>
        <p><strong>Atividades Propostas:</strong> ${atividades}</p>
        <p><strong>Experiência com Animais:</strong> ${experiencia_animais}</p>
        <p><strong>Alergia ou Condição Médica:</strong> ${alergia_condicao}</p>
      `,
        };

        try {
            // Envia o e-mail
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: "E-mail enviado com sucesso!" });
        } catch (error) {
            console.error("Erro ao enviar o e-mail:", error);
            return res.status(500).json({ message: "Erro ao enviar o e-mail." });
        }
    } else {
        return res.status(405).json({ message: "Método não permitido" });
    }
}
