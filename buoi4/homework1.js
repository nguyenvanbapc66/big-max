// Bài tập 1: Viết ứng dụng tính diện tích hình chữ nhật và chạy song song 2 luồng
function squareHCN(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x*y)
        }, 2000)
    })
}

async function run() {
    for(let i = 0; i < 5; i++) {
        let [hcn1, hcn2] = await Promise.all([squareHCN(i + 1, i + 2), squareHCN(i + 2, i + 3)])
        console.log('Line' + i + 1 + ':', hcn1, hcn2)
    }
}

run()