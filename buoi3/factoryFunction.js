// Factory function
function taiKhoan(money) {
    let myMoney = money

    return {
        xem: () => {
            return `Bạn đang có ${myMoney} trong tài khoản`
        },
        nap: (soLuong) => {
            myMoney += soLuong
        },
        rut: (soLuong) => {
            if(soLuong > myMoney) {
                return `Không đủ tiền`
            }
            myMoney -= soLuong
        }
    }
}

const account = taiKhoan(20)
console.log(account.xem())