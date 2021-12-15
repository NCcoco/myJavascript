// 没有代码高亮版，基于jquery的 1.0版本
// TODO 计划升级到有代码高亮，并基于vue的版本 2.0
$(document).ready(function(){
    $("#format").on("click", function(){
        formatJson("o_json")
    })
    let f_json = $("#f_json")

    function formatJson(text_id) {
        let o_json = $("#" + text_id).val()
        o_json = o_json.trim()
        if(!isJSON(o_json)) {
            return false
        }

        let json = JSON.parse(o_json)
        console.info(json)
        let zip_json_str = JSON.stringify(json)
        f_json.val(formatCode(zip_json_str))

        return "123"
    }

    function formatCode(zip_json_str, type) {
        let m = zip_json_str.length
        if(m < 1) {
            return ""
        }
        let left_symbols = ["[", "{"]
        let right_symbols = ["]", "}"]

        let insert_obj = {}
        let in_string = false
        let layer = 0

        for(let i = 0; i < m; i ++) {
            let next = i + 1
            let last = i
            if(left_symbols.indexOf(zip_json_str[i]) > -1) {
                layer += 1
                insert_obj[""+next] = "\n" + new Array(layer + 1).join("\t")
            }
            if(in_string) {
                if("\"" === zip_json_str[i]){
                    in_string = false
                }
                continue
            }
            if("\"" === zip_json_str[i]) {
                in_string = true
                continue
            }
            if("," === zip_json_str[i]) {
                insert_obj[""+next] = "\n" + new Array(layer + 1).join("\t")
                continue
            }
            if(":" === zip_json_str[i]) {
                insert_obj[""+last] = " "
                insert_obj[""+next] = " "
                continue
            }
            if(right_symbols.indexOf(zip_json_str[i]) > -1) {
                layer -= 1
                insert_obj[""+last] = "\n" + new Array(layer + 1).join("\t")
            }
        }
        console.info(insert_obj)
        // 开始插入到原始字符串中
        let copy_json_arr = zip_json_str.split('')
        let addnum = 0
        for(let k in insert_obj) {
            let index = parseInt(k) + addnum
            console.info(index)
            copy_json_arr.splice(index, 0, insert_obj[k+""])
            console.info(copy_json_arr)
            addnum += 1
        }
        return copy_json_arr.join('')
    }

    function isJSON(str) {
        if (typeof str == 'string') {
            try {
                JSON.parse(str)
                return true;
            } catch(e) {
                console.log(e)
                return false;
            }
        }
        console.log('It is not a string!')
    }
})
