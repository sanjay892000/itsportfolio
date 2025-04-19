const nodemailer = require("nodemailer");
const express = require("express");
const Contact = require("../schema/contact.model");
const router = express.Router();

router.post("/sendmessage", (req, res) => {
    const { name, email, subject, message } = req.body;
    const contact = new Contact({ name, email, subject, message });
    contact
        .save()
        .then(() => {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "sanjay892000@gmail.com",
                    pass: "zicwauzfqbnltddc",
                },
            });
            const mailOptions = {
                from: "sanjay892000@gmail.com",
                to: email,
                subject: "thanks for contacting us",
                html: `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>New Template</title>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">

    <style type="text/css">
        .rollover:hover .rollover-first {
            max-height: 0px !important;
            display: none !important;
        }

        .rollover:hover .rollover-second {
            max-height: none !important;
            display: block !important;
        }

        .rollover span {
            font-size: 0px;
        }

        u+.body img~div div {
            display: none;
        }

        #outlook a {
            padding: 0;
        }

        span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
            color: inherit;
            mso-style-priority: 99;
        }

        a.es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
        }

        a[x-apple-data-detectors],
        #MessageViewBody a {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
        }

        @media only screen and (max-width:600px) {
            .es-m-p0r {
                padding-right: 0px !important
            }

            .es-m-p20b {
                padding-bottom: 20px !important
            }

            .es-m-p0b {
                padding-bottom: 0px !important
            }

            .es-p-default {}

            *[class="gmail-fix"] {
                display: none !important
            }

            p,
            a {
                line-height: 150% !important
            }

            h1,
            h1 a {
                line-height: 120% !important
            }

            h2,
            h2 a {
                line-height: 120% !important
            }

            h3,
            h3 a {
                line-height: 120% !important
            }

            h4,
            h4 a {
                line-height: 120% !important
            }

            h5,
            h5 a {
                line-height: 120% !important
            }

            h6,
            h6 a {
                line-height: 120% !important
            }

            .es-header-body p {}

            .es-content-body p {}

            .es-footer-body p {}

            .es-infoblock p {}

            h1 {
                font-size: 30px !important;
                text-align: left
            }

            h2 {
                font-size: 24px !important;
                text-align: left
            }

            h3 {
                font-size: 20px !important;
                text-align: left
            }

            h4 {
                font-size: 24px !important;
                text-align: left
            }

            h5 {
                font-size: 20px !important;
                text-align: left
            }

            h6 {
                font-size: 16px !important;
                text-align: left
            }

            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
                font-size: 30px !important
            }

            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
                font-size: 24px !important
            }

            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
                font-size: 20px !important
            }

            .es-header-body h4 a,
            .es-content-body h4 a,
            .es-footer-body h4 a {
                font-size: 24px !important
            }

            .es-header-body h5 a,
            .es-content-body h5 a,
            .es-footer-body h5 a {
                font-size: 20px !important
            }

            .es-header-body h6 a,
            .es-content-body h6 a,
            .es-footer-body h6 a {
                font-size: 16px !important
            }

            .es-menu td a {
                font-size: 14px !important
            }

            .es-header-body p,
            .es-header-body a {
                font-size: 14px !important
            }

            .es-content-body p,
            .es-content-body a {
                font-size: 14px !important
            }

            .es-footer-body p,
            .es-footer-body a {
                font-size: 14px !important
            }

            .es-infoblock p,
            .es-infoblock a {
                font-size: 12px !important
            }

            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3,
            .es-m-txt-c h4,
            .es-m-txt-c h5,
            .es-m-txt-c h6 {
                text-align: center !important
            }

            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3,
            .es-m-txt-r h4,
            .es-m-txt-r h5,
            .es-m-txt-r h6 {
                text-align: right !important
            }

            .es-m-txt-j,
            .es-m-txt-j h1,
            .es-m-txt-j h2,
            .es-m-txt-j h3,
            .es-m-txt-j h4,
            .es-m-txt-j h5,
            .es-m-txt-j h6 {
                text-align: justify !important
            }

            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3,
            .es-m-txt-l h4,
            .es-m-txt-l h5,
            .es-m-txt-l h6 {
                text-align: left !important
            }

            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
                display: inline !important
            }

            .es-m-txt-r .rollover:hover .rollover-second,
            .es-m-txt-c .rollover:hover .rollover-second,
            .es-m-txt-l .rollover:hover .rollover-second {
                display: inline !important
            }

            .es-m-txt-r .rollover span,
            .es-m-txt-c .rollover span,
            .es-m-txt-l .rollover span {
                line-height: 0 !important;
                font-size: 0 !important;
                display: block
            }

            .es-spacer {
                display: inline-table
            }

            a.es-button,
            button.es-button {
                font-size: 18px !important;
                padding: 10px 10px 10px 10px !important;
                line-height: 100% !important
            }

            a.es-button,
            button.es-button,
            .es-button-border {
                display: inline-block !important
            }

            .es-m-fw,
            .es-m-fw.es-fw,
            .es-m-fw .es-button {
                display: block !important
            }

            .es-m-il,
            .es-m-il .es-button,
            .es-social,
            .es-social td,
            .es-menu {
                display: inline-block !important
            }

            .es-adaptive table,
            .es-left,
            .es-right {
                width: 100% !important
            }

            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
                width: 100% !important;
                max-width: 600px !important
            }

            .adapt-img {
                width: 120px !important;
                height: auto !important;
                object-fit: cover !important;
                border-radius: 50% !important;
                margin-bottom: 20px !important;
                
            }

            .es-mobile-hidden,
            .es-hidden {
                display: none !important
            }

            .es-desk-hidden {
                width: auto !important;
                overflow: visible !important;
                float: none !important;
                max-height: inherit !important;
                line-height: inherit !important
            }

            tr.es-desk-hidden {
                display: table-row !important
            }

            table.es-desk-hidden {
                display: table !important
            }

            td.es-desk-menu-hidden {
                display: table-cell !important
            }

            .es-menu td {
                width: 1% !important
            }

            table.es-table-not-adapt,
            .esd-block-html table {
                width: auto !important
            }

            .h-auto {
                height: auto !important
            }
        }

        @media screen and (max-width:384px) {
            .mail-message-content {
                width: 414px !important
            }
        }
    </style>
</head>

<body class="body"
    style="width:100%;height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#E1ECF7">
        
        <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#E1ECF7">
            <tr>
                <td valign="top" style="padding:0;Margin:0">
                    <table cellpadding="0" cellspacing="0" align="center" class="es-header" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0"
                                    class="es-header-body" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#00406C;width:600px">
                                    <tr>
                                        <td align="left"
                                            background="https://fkzbyuq.stripocdn.email/content/guids/CABINET_0fa486e736790bd0e3fdb2f0eb814a76/images/hectorjrivas1fxmet2u5duunsplash_1.png"
                                            style="Margin:0;padding-top:30px;padding-right:40px;padding-bottom:30px;padding-left:40px;background-image:url(https://fkzbyuq.stripocdn.email/content/guids/CABINET_0fa486e736790bd0e3fdb2f0eb814a76/images/hectorjrivas1fxmet2u5duunsplash_1.png);background-repeat:no-repeat;background-position:center top">
                                            
                                            <table cellpadding="0" cellspacing="0" align="left" class="es-left"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td align="center" valign="top" class="es-m-p0r es-m-p20b"
                                                        style="padding:0;Margin:0;width:127px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0">
                                                                    <img
                                                                        src="https://fkzbyuq.stripocdn.email/content/guids/CABINET_c74740326627f415e8275e13895c1b042fe51c4adc86f8c5fe68736d1f57164e/images/logo.png"
                                                                        alt="" width="80" class="adapt-img"
                                                                        height="80"
                                                                        style="display:block;font-size:16px;border:0;outline:none;text-decoration:none">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <table cellpadding="0" cellspacing="0" align="right" class="es-right"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:373px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="right"
                                                                    style="padding:0;Margin:0;padding-top:15px">
                                                                    <p class="es-m-txt-c"
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:18px;letter-spacing:0;color:#F8F9FB;font-size:12px">
                                                                        <a target="_blank" href="tel:(000)123-456-789"
                                                                            style="mso-line-height-rule:exactly;text-decoration:underline;color:#F8F9FB;font-size:12px">+91-6388774338</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="right"
                                                                    style="padding:0;Margin:0;padding-top:10px">
                                                                    <p class="es-m-txt-c"
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:18px;letter-spacing:0;color:#F8F9FB;font-size:12px">
                                                                        <a target="_blank"
                                                                            href="mailto:realagency@email"
                                                                            style="mso-line-height-rule:exactly;text-decoration:underline;color:#F8F9FB;font-size:12px">sanjay892000@gmail.com</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0"
                                    class="es-content-body" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F8F9FB;width:600px">
                                    <tr>
                                        <td align="left" class="es-m-p0b"
                                            style="Margin:0;padding-right:40px;padding-bottom:30px;padding-left:40px;padding-top:40px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:520px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left" style="padding:0;Margin:0">
                                                                    <h1
                                                                        style="Margin:0;font-family:'Josefin Sans', helvetica, arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:40px;font-style:normal;font-weight:normal;line-height:48px;color:#001523">
                                                                        Thanks for your feedback🌟</h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-right:20px;padding-bottom:10px;padding-left:20px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:520px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left"
                                                                    style="Margin:0;padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:15px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:24px;letter-spacing:0;color:#001523;font-size:16px">
                                                                        Dear ${name},</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:24px;letter-spacing:0;color:#001523;font-size:16px">
                                                                        Thank you for taking the time to provide us with
                                                                        your valuable feedback. We truly appreciate your
                                                                        input and are grateful for your honesty and
                                                                        openness.</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:24px;letter-spacing:0;color:#001523;font-size:16px">
                                                                        <br></p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:24px;letter-spacing:0;color:#001523;font-size:16px">
                                                                        Your feedback plays a vital role in helping us
                                                                        improve our services and better understand your
                                                                        needs. We take every suggestion seriously and
                                                                        continuously strive to enhance the quality of
                                                                        our offerings.</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:24px;letter-spacing:0;color:#001523;font-size:16px">
                                                                        If you have any further questions or concerns,
                                                                        please feel free to reach out to us.</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:24px;letter-spacing:0;color:#001523;font-size:16px">
                                                                        Best regards,</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:24px;letter-spacing:0;color:#001523;font-size:16px">
                                                                        Incorporate Knowledge</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0"
                                    class="es-content-body" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F8F9FB;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-right:40px;padding-left:40px;padding-top:20px;padding-bottom:40px">
                                            <table cellpadding="0" cellspacing="0" align="left" class="es-left"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:95px">
                                                        <table width="100%" role="presentation" cellpadding="0"
                                                            cellspacing="0"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0;">
                                                                    <img alt=""
                                                                        width="95"
                                                                        src="https://fkzbyuq.stripocdn.email/content/guids/CABINET_c74740326627f415e8275e13895c1b042fe51c4adc86f8c5fe68736d1f57164e/images/image.jpeg"
                                                                        class="adapt-img" height="95"
                                                                        style="display:block;font-size:16px;border:0;outline:none;text-decoration:none;">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <table cellpadding="0" cellspacing="0" align="right" class="es-right"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:405px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left" style="padding:0;Margin:0">
                                                                    <h2 class="es-m-txt-c"
                                                                        style="Margin:0;font-family:'Josefin Sans', helvetica, arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:32px;font-style:normal;font-weight:normal;line-height:38.4px;color:#001523">
                                                                        sanjay Kumar Singh</h2>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-top:5px">
                                                                    <p class="es-m-txt-c"
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:24px;letter-spacing:0;color:#001523;font-size:16px">
                                                                        <a target="_blank" href="tel:(000)123-456-789"
                                                                            style="mso-line-height-rule:exactly;text-decoration:underline;color:#001523;font-size:14px">+91-6388774338</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-top:5px">
                                                                    <p class="es-m-txt-c"
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:24px;letter-spacing:0;color:#001523;font-size:16px">
                                                                        <a target="_blank"
                                                                            href="mailto:realagency@email"
                                                                            style="mso-line-height-rule:exactly;text-decoration:underline;color:#001523;font-size:14px">sanjat892000@gmail.com</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table> 
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" align="center" class="es-footer" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0"
                                    class="es-footer-body" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#00406C;width:600px">
                                    <tr>
                                        <td align="left"
                                            background="https://fkzbyuq.stripocdn.email/content/guids/CABINET_0fa486e736790bd0e3fdb2f0eb814a76/images/hectorjrivas1fxmet2u5duunsplash_1.png"
                                            style="Margin:0;padding-right:40px;padding-left:40px;padding-top:20px;padding-bottom:20px;background-image:url(https://fkzbyuq.stripocdn.email/content/guids/CABINET_0fa486e736790bd0e3fdb2f0eb814a76/images/hectorjrivas1fxmet2u5duunsplash_1.png);background-repeat:no-repeat;background-position:center top">

                                            <table cellpadding="0" cellspacing="0" align="left" class="es-left"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td align="left" class="es-m-p20b"
                                                        style="padding:0;Margin:0;width:194px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center" class="es-m-txt-c"
                                                                    style="padding:0;Margin:0;padding-bottom:15px;font-size:0px">
                                                                    <a target="_blank" href="https://viewstripo.email"
                                                                        style="mso-line-height-rule:exactly;text-decoration:underline;color:#F8F9FB;font-size:12px">
                                                                        <img
                                                                            src="https://fkzbyuq.stripocdn.email/content/guids/CABINET_c74740326627f415e8275e13895c1b042fe51c4adc86f8c5fe68736d1f57164e/images/image.png"
                                                                            alt="" height="80" class="adapt-img"
                                                                            style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"
                                                                            width="80"></a> </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0">
                                                                    <table cellpadding="0" cellspacing="0"
                                                                        class="es-table-not-adapt es-social"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr>
                                                                            <td align="center" valign="top"
                                                                                style="padding:0;Margin:0;padding-right:10px">
                                                                                <a target="_blank"
                                                                                    href="https://www.facebook.com/sanjay.singh.423911/"
                                                                                    style="mso-line-height-rule:exactly;text-decoration:underline;color:#F8F9FB;font-size:12px">
                                                                                    <img
                                                                                        src="https://fkzbyuq.stripocdn.email/content/assets/img/social-icons/square-white/facebook-square-white.png"
                                                                                        alt="Fb" title="Facebook"
                                                                                        height="24" width="24"
                                                                                        style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a>
                                                                            </td>
                                                                            <td align="center" valign="top"
                                                                                style="padding:0;Margin:0;padding-right:10px">
                                                                                <a target="_blank"
                                                                                    href="https://x.com/sanjayk21415502"
                                                                                    style="mso-line-height-rule:exactly;text-decoration:underline;color:#F8F9FB;font-size:12px">
                                                                                    <img
                                                                                        src="https://fkzbyuq.stripocdn.email/content/assets/img/social-icons/square-white/x-square-white.png"
                                                                                        alt="X" title="X" height="24"
                                                                                        width="24"
                                                                                        style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a>
                                                                            </td>
                                                                            <td align="center" valign="top"
                                                                                style="padding:0;Margin:0;padding-right:10px">
                                                                                <a target="_blank"
                                                                                    href="https://www.instagram.com/sanjay_singh.15/"
                                                                                    style="mso-line-height-rule:exactly;text-decoration:underline;color:#F8F9FB;font-size:12px">
                                                                                    <img
                                                                                        src="https://fkzbyuq.stripocdn.email/content/assets/img/social-icons/square-white/instagram-square-white.png"
                                                                                        alt="Ig" title="Instagram"
                                                                                        height="24" width="24"
                                                                                        style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a>
                                                                            </td>
                                                                            <td align="center" valign="top"
                                                                                style="padding:0;Margin:0"><a
                                                                                    target="_blank"
                                                                                    href="https://www.youtube.com/@incorporateknowledge"
                                                                                    style="mso-line-height-rule:exactly;text-decoration:underline;color:#F8F9FB;font-size:12px">
                                                                                    <img
                                                                                        src="https://fkzbyuq.stripocdn.email/content/assets/img/social-icons/square-white/youtube-square-white.png"
                                                                                        alt="Yt" title="Youtube"
                                                                                        height="24" width="24"
                                                                                        style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>

                                            <table cellpadding="0" cellspacing="0" align="right" class="es-right"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:306px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-bottom:15px;padding-top:35px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:18px;letter-spacing:0;color:#F8F9FB;font-size:12px">
                                                                        <a target="_blank"
                                                                            href="https://sanjay892000.netlify.app/"
                                                                            style="mso-line-height-rule:exactly;text-decoration:underline;color:#F8F9FB;font-size:12px">myPortfolio</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-bottom:5px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:18px;letter-spacing:0;color:#F8F9FB;font-size:12px">
                                                                        Thank you for taking the time to provide us</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                        <tr>
                            <td align="center" class="es-info-area" style="padding:0;Margin:0">
                                <table align="center" cellpadding="0" cellspacing="0" class="es-content-body"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                    role="none">
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-top:30px;padding-right:40px;padding-bottom:30px;padding-left:40px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:520px">

                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>`,
            };
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log("Error occurred. " + err.message);
                    return res.status(401).send("message not send");
                } else {
                    console.log("Message sent: %s", info.response);
                    return res.status(201).send("message send");
                }
            });
            const success = true;
            res.json({ success, message: "Contact added successfully", contact });
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
