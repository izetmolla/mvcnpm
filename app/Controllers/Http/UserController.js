'use strict'

const User = require("../../Models/User")
const Crypt = require("@mvcnpm/framework/src/Crypt")



class UserController {

    async index({ req, res }) {

        res.json({
            crypted: Crypt.encrypt("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),
            encrypted: Crypt.decrypt("VTJGc2RHVmtYMStKNzhoTEMraHdUeTd0YlhUdWs0cHJHcmdDQUhjRld3NHZkb1Nzejd0dHJVTlJZY0Q4VnVPb0c2d0ZzbWxOOSs5RHdCUlhwOUJIRHo5OTIveC9rOUI3OCtQSTJxMDc4SVNFc2E5SzB4cUtFd0pKQVZmNHhIRzZ5V2lSdkdxc0VWVlRWWGlzWEJnN2FRWFBVelBmdEo3RlVnbm16VHJEQzRRdFJhbmNxdStIemtyUk1mSGJZVjF3QTluZkUxTEFmSDhiazFwM0VpcnRzRHc2VUJISHZzVzJxL2MxMWFJdk81eStXU05jcVNNSEFJTlppMlB0Wjc5MkdMMC9EWG5sdkZ6djAyQ0RjS1pGZDFacysyMUdhNGFZeGd4cFgrYmp2WGh6RDlmdmtkeDRwWDM0K1o5S1h0ZGVBVWExakFGNTd4UWg1RkZLM1dvbGkrN29LS09OWWtZWUh1Qmp3OXh5cmZQbXNtdEZTdXBpNjRGL044azJwMTJ6clNFaDNkT1BINGphTVRvdnRqNnlXOVpWNUM4REV5emRDSmhjaUYrcGhRSWdtQUNmRGpiSTJSMWVQVHdXcHhYbnE0dUtKYmZGdVRQbHNGcUFyQ3pSVUZlYWNobFpLWVkxTlRYdXM3U3pQU2JHVjFndnVDQjNhd1pPYVplYVZaaDdaQllPeUoyOXd3eDNWc3VNTkF1Z3FVMURmY0VvUFVnWm55Zm5yeklRaGZQU2tuMWV1cVdsb1VPL0VpbS9CWktsUm5Vd3JLSTRUNllkZGI2MUNyc0ZFTEtxSzQ3QklzUXJjaERzYUVML1JXZXQ4OVJKVVpNVWFsVHAvYmE1NExWRGcrYTBFRVZkUVBKRThmRklJZ1ZwVGdET0pLYW92cFpqdjVKcTRXYmxMT0tqU0dvWm5Cd05RdzJrTGY3VFk3YmEraHkrY25EUisxdHhrczBJd3ZPSjVoU2EycXEyWlFZeUtqN3pqdmdEb0ZEZWVzTWtpMzhVaytjNEl4dlp4NkdNYUZmSDFKcW8wRmJWcW9FVE5UQlhNZz09")
        })
    }

    getUserDetails({ req, res }) {
        res.json({
            req: 123
        })
    }

    async profile({ query, params, req, res, next }) {
        const user = await User.findOne({ where: { id: 1 } });
        res.json(user)
    }


    async route() {

    }

}

module.exports = UserController
