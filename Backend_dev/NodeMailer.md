1. npm install nodemailer
2. For getting credentials go to manage your google account , then go to security
# Enable 2 step verification , after enabling click on that you can see app passwords
# Then create the app password , copy it and paste below in the pass


const transporter = nodemailer.createTransport({
          host: "gmail",
          service:'gmail',
          auth: {
            user: EMAIL,   // Host email
            pass: details.PASSWORD
          },
        });

        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: details.EMAIL,
          to: req.body.email,
          subject: "Acceptance of The Department",
          text: "Your Department has been added for the seminar hall booking system",
          html: `<h3>Your Department has been added for the seminar hall booking system</h3><br/><p>Your Password for Department Login is ${req.body.password}</p>`,
        });