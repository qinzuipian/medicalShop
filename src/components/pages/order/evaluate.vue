<template>
    <div class="evaluate">
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label">未评价</span>
                <table cellspacing=0 cellpadding=10>
                    <tr>
                        <th>下单时间</th>
                        <th>订单内容</th>
                        <th>金额</th>
                        <th>操作</th>
                    </tr>
                    <tr>
                        <td>2018-12-02 12:25:30</td>
                        <td>回到家是否还行绝对不诉讼法公司电话比较多比较好的方便</td>
                        <td>36</td>
                        <td>
                            <el-button type="primary" size="mini">评价</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>2018-12-02 12:25:30</td>
                        <td>回到家是否还行绝对不诉讼法公司电话比较多比较好的方便</td>
                        <td>36</td>
                        <td>
                            <el-button type="primary" size="mini">评价</el-button>
                        </td>
                    </tr>
                </table>
            </el-tab-pane>
            <el-tab-pane label="已评价">
                <table cellspacing=0 cellpadding=10>
                    <tr>
                        <th>下单时间</th>
                        <th>订单内容</th>
                        <th>金额</th>
                        <th>评价</th>
                    </tr>
                    <tr>
                        <td>2018-12-02 12:25:30</td>
                        <td>回到家是否还行绝对不诉讼法公司电话比较多比较好的方便</td>
                        <td>36</td>
                        <td>服务很棒，回复很及时。态度也很耐心!</td>
                    </tr>
                   <tr>
                        <td>2018-12-02 12:25:30</td>
                        <td>回到家是否还行绝对不诉讼法公司电话比较多比较好的方便</td>
                        <td>36</td>
                        <td>服务很棒，回复很及时。态度也很耐心!</td>
                    </tr>
                </table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>


<style scoped>
.evaluate {
    padding: 10px;
}
.evaluate table {
    text-align: center;
    width: 100%;
}
.evaluate table th {
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    background-color: #f5f5f5;
    font-size: 14px;
}
.evaluate table td {
    font-size: 14px;
}

</style>


