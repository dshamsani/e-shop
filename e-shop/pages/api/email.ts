import { transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  const email = process.env.EMAIL;
  const imageLink = process.env.NEXT_PUBLIC_ASSETS;
  if (req.method === "POST") {
    const data = req.body;
    try {
      await transporter.sendMail({
        from: email,
        to: data.email,
        subject: data.subject,
        html: `<tbody>
<tr>
  <td>
    <div id="vmdoc-header" class="vmdoc-header" style="font-size: 7pt"> </div>
    <table class="html-email" style="background-color: #fff; border-top-left-radius: 20px; border-top-right-radius: 20px; border-collapse: collapse; font-family: Arial, Helvetica, sans-serif; font-size: 12px; margin: 0 auto" width="100%" cellspacing="0" cellpadding="5">
      <tbody>
        <tr>
          <td class="vmdoc-header-image" style="text-align: center" width="100%"> <a href="https://ugo.cz/" style="text-align: center; margin: 1em auto 0 auto; border-radius: 100%" title="Ugo" class="gantry-logo" target="_blank" rel="noreferrer"> <img src="https://www.ugo.cz/assets/img/logo_cs-CZ.png" style="max-width: 120px; max-height: 106px; width: 120px; height: 106px" width="80" height="120">
            </a> </td>
        </tr>
        <tr>
          <td colspan="2" class="vmdoc-header-separator" width="100%"><br>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding: 0 2em; font-size: 18px">
            <p style="margin: 1rem auto; text-align: center; line-height: 22px"> <strong> Milý
                zákazníku,<br>
                ${data.subject} k nám v pořádku dorazila
                a my už vybíráme ty nejčerstvější suroviny pro
                Vaše menu. </strong><br>
            </p>
            <p style="margin: 0 auto; font-weight: 600; text-align: center; line-height: 22px"><br>
              Čekat na Vás bude 31.10.2022 mezi 10:45 a 11:00<br>
              v provozovně <span class="vmshipment_name">UGO
                Salaterie Centrum Černý Most Praha</span>. </p>
            <p style="margin: 0 auto; text-align: center; text-decoration: underline"><br>
              <a style="color: #8aa431" href="https://www.google.cz/maps?q=Chlumecká                          756/6                          198 00 Praha 9" target="_blank" rel="noreferrer">OTEVŘÍT
                MAPU</a> </p>
            <p style="margin: 0 auto; font-size: 16px"><br>
              Zapomněli jste nám něco říct? Nenechávejte si to
              pro sebe a rovnou nám zavolejte! </p>
            <div style="display: flex; align-items: center">
              <p style="margin: 18px 5px 18px 0; font-size: 16px"> Telefon do provozovny: <a href="tel:+420775567616" target="_blank" rel="noreferrer">+420 775 567 616</a>
              </p>
            </div>
            <p style="margin: 0 auto; font-size: 16px"><br>
              Máte to rádi čerstvé? My jedině! Proto se pro
              svou objednávku, prosíme, stavte ve výše
              uvedeném časovém rozmezí. Za opuštěné objednávky
              se platby nevrací. Pokud už teď víte, že
              nestíháte, zavolejte nám. </p>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding: 5px"><br>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="html-email" style="background-color: #fff; border-collapse: collapse; font-family: Arial, Helvetica, sans-serif; font-size: 12px; margin: 0 auto" width="100%" cellspacing="0" cellpadding="5" border="0" bgcolor="#fff">
      <tbody>
        <tr>
           <td style="background-color: #fff" width="100%" align="center"> <a class="default" title="UGO" href="http://localhost:3000/order/${
             data.detailLink
           }" style="background: #8aa431; font-size: 18px; display: inline-block; padding: 5px 10px; color: #FFFFFF; text-decoration: none; text-decoration-color: #8aa431" target="_blank" rel="noreferrer"> Zobrazit objednávku
              on-line </a><br>
            <br>
          </td>
        </tr>
         <tr>
          <td colspan="2" align="left"> <br>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="shopperaddresses-wrapper">
      <div class="shopperaddresses-inside">
        <table class="html-email" style="background-color: #fff; border-bottom: 2px solid #8aa431; border-collapse: collapse; font-family: Arial, Helvetica, sans-serif; font-size: 12px; margin: 0 auto" width="100%" cellspacing="0" cellpadding="5">
          <tbody>
            <tr>
              <th style="background: #8aa431; color: #fff" width="100%"> Kdo už se může začít těšit </th>
            </tr>
            <tr>
              <td style="text-align: center; padding: 1rem 0" width="100%" valign="top">
                <p style="font-size: 18px; margin-bottom: 0">
                  <span class="values vm2-first_name"> Test </span>
                  <span class="values vm2-last_name"> Wi </span>
                  <br class="clear">
                  <span class="values vm2-email">
                    <a class="moz-txt-link-abbreviated" href="mailto:david.choloyan@web-integrator.cz" onclick="return rcmail.command('compose','david.choloyan@web-integrator.cz',this)" rel="noreferrer">david.choloyan@web-integrator.cz</a> </span> <br class="clear">
                  <span class="values vm2-phone_1">
                    +420773929613 </span> <br class="clear">
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p style="margin: 0 auto; text-align: center; background-color: #8aa431; color: #ffffff; padding: 10px 5px 5px; font-size: 16px"> Jaké dobroty jste si objednali?</p>
    <table class="html-email shopper" style="background-color: #fff; border-bottom: 3px solid #8aa431; border-collapse: collapse; margin: 0 auto; font-family: Arial, Helvetica, sans-serif; font-size: 12px" width="100%" cellspacing="0" cellpadding="5" border="0" bgcolor="white">
      <tbody>
        <tr style="text-align: left" class="sectiontableheader">
          <th colspan="2" style="color: #fff" bgcolor="#8aa431" align="center">Název</th>
          <th style="color: #fff" bgcolor="#8aa431" align="center">Stav produktu</th>
          <th style="color: #fff" bgcolor="#8aa431" align="center">Cena za kus</th>
          <th style="color: #fff" bgcolor="#8aa431" align="center">Množství</th>
          <th style="color: #fff" bgcolor="#8aa431" align="center">DPH 21%</th>
          <th style="color: #fff" bgcolor="#8aa431" align="right">Cena celkem</th>
        </tr>
        ${data.productData
          .map((item) => {
            return `        
          <tr style="vertical-align: top">
            <td style="border: 1px solid #8aa431" colspan="2" align="left">
              <div><img src="${imageLink}${item.id}/${
              item.filename_downoload
            }" style="width: 60px; float: left; margin-right: 5px" width="60px"><a href="http://localhost:3000/product/${
              item.slug
            }" target="_blank" rel="noreferrer">${item.name}</a> </div>
            </td>
          <td style="border: 1px solid #8aa431" align="center"> Stornovaná </td>
          <td style="border: 1px solid #8aa431" class="priceCol" align="right"> <span>${item.price} Kč</span><br>
          </td>
          ${data.productCount
            .map((count) => {
              if (count.productId == item.id) {
                return `<td style="border: 1px solid #8aa431" align="right">
              ${count.productCount} </td>`;
              }
            })
            .join("")}
          <td style="border: 1px solid #8aa431" class="priceCol" align="right"><span class="priceColor2">0 Kč</span></td>
          <td style="border: 1px solid #8aa431" class="priceCol" align="right"> ${item.price} Kč </td>
        </tr>`;
          })
          .join("")}
        <tr class="sectiontableentry1">
          <td colspan="5" style="border: 1px solid #8aa431" align="right">Celková cena</td>
          <td style="border: 1px solid #8aa431" align="right"><span class="priceColor2">0 Kč</span></td>
          <td style="border: 1px solid #8aa431" align="right">${data.amount}
            Kč</td>
        </tr>
        <tr>
          <td style="border: 1px solid #8aa431" class="pricePad" colspan="5" align="right">Osobní
            vyzvednutí – UGO Salaterie Centrum Černý Most
            Praha </td>
          <td style="border: 1px solid #8aa431" align="right"><span class="priceColor2">0 Kč</span> </td>
          <td style="border: 1px solid #8aa431" align="right">0
            Kč</td>
        </tr>
        <tr>
          <td style="border: 1px solid #8aa431" class="pricePad" colspan="5" align="right">Online
            platba platební kartou</td>
          <td style="border: 1px solid #8aa431" align="right"><span class="priceColor2">0 Kč</span> </td>
          <td style="border: 1px solid #8aa431" align="right">0
            Kč</td>
        </tr>
        <tr>
          <td style="border: 1px solid #8aa431" class="pricePad" colspan="5" align="right"><strong>Cena
              celkem</strong></td>
          <td style="border: 1px solid #8aa431" align="right"><span class="priceColor2">0 Kč</span></td>
          <td style="border: 1px solid #8aa431" align="right"><strong>${data.amount}
              Kč</strong></td>
        </tr>
      </tbody>
    </table>
    <div style="background: #fff; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; text-align: center; font-size: 18px" class="footer">
      <p style="margin: 0 auto"> <br>
        <span style="display: block">Děkujeme za Vaši
          objednávku a přejeme den plný rovnováhy!</span><br>
        <br>
        <strong style="color: #8aa431"> <a href="http://localhost:3000/order/${
          data.detailLink
        }" style="color: #8aa431" target="_blank" rel="noreferrer">http://localhost:3000/order/${data.detailLink}<br>
            <br>
          </a> </strong> </p>
  </td>
</tr>
</tbody>`,
      });
      return res.status(200).json(req.body);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
};

export default handler;
