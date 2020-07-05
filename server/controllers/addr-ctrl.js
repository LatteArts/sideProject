const Addr = require('../models/addr-model')

addrList = async (req, res) => {
    await Addr.find({}, (err, addrs) => {   // 빈 객체면 모든걸 찾음
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!addrs.length) {
            return res
                .status(404)
                .json({ success: false, error: '주소록을 찾을 수 없습니다.' })
        }
        return res.status(200).json({ success: true, data: addrs })
    }).catch(err => console.log(err))
}