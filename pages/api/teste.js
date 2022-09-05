import { useRouter } from "next/router";

export default function(req,res)  {
    res.status(200).json({
        params: req.query.produto
    })
}