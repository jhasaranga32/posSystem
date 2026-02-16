 const Payment = require('../model/PaymentSchema');

const makepayment =async (req,resp)=>{ //admin
    try{
        const createdPayment= new Payment(req.body);
        const savedPayment =await createdPayment.save();
        resp. status(201).json({message:"payment saved",data:savedPayment});
    }catch(e){
        resp.status(500).json({error:e.message});
    }
}

const findIncomeToday=async (req,resp)=>{ //admin
    try{
        const {day} =req.query
        const startDay = new Date(day);
        const endDay = new Date(day);

        endDay.setDate(endDay.getDate()+1);
        const data =await createdPayment.find({
            date:{
                $gte:startDay,
                $lt:endDay
            }
        });
        const totalIncome = data.reduce((sum,payment)=>sum+payment.amount,0);
        resp.status(200).json({message:"today\'s income",data:totalIncome});
    }catch(e){
        resp.status(500).json({error:e.message});
    }
}

const findIncomeByMonth = async (req, resp) => { // admin
    try {
       
         const now =new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(),1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth()+1,1);

        const data = await Payment.find({
            Date: {
                $gte: startOfMonth,
                $lt: endOfMonth
            }
        });

        const incomebyday = data.reduce((acc, payment) => { 
            payment.Date.toISOString().split("T")[0];
                acc[day]=(acc[day] || 0)+payment.amount;
                return acc;
            }
            
        );

        resp.status(200).json({
            message: "monthly income",
            data: {month:now.getMonth()+1,income:incomebyday}
        });

    } catch (e) {
        resp.status(500).json({ error: e.message });
    }
};











 module.exports={makepayment,findIncomeToday,findIncomeByMonth

 };