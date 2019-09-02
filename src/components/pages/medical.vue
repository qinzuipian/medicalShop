<template>
    <div class="medicalMain">
        <div class="search">
          <el-input placeholder="输入查询的信息" style="width:40%;"></el-input>
          <el-button type="primary">搜索</el-button>
          <div class="info">
            <h2 class="el-icon-chat-line-round">药品信息</h2>
            <p class="line"></p>
            <div class="botinfo">
              <div class="left">
                <img src="./../../assets/info.jpg" alt="">
              </div>
              <div class="right">
                <h3>培哚普利吲达帕胺片</h3>
                <p>
                  <span>药物分类：</span>
                  <span>磺胺药的单方制剂/血管紧张素转化酶抑制剂的单方制剂</span>
                </p>
                <p>
                  <span>功能主治：</span>
                  <span>原发性高血压。本品适用于单独服用培哚普利不能完全控制血压的患者。</span>
                </p>
                <p>
                  <span>用法用量：</span>
                  <span>口服。每日一次，每次服用一片本品，最好在清晨餐前服用。在可能的情况下，建议依据个体情况对用药剂量进行逐步调整。对于适当的临床病例，可以考虑由单药治疗直接转为本品治疗。肾功能不全的患者(见【注意事项】)</span>
                </p>
                <p>
                  <span>不良反应：</span>
                  <span>与本品相关服用培哚普利可抑制肾素-血管紧张素-醛固酮轴而使吲达帕胺所致的失钾减少。服用本品的4%患者出现低钾血症(钾离子水平＜3.4mmol/L)。胃肠道常见(＞1/100，＜1/10)：便秘、口干</span>
                </p>
                <p>
                  <span>批准文号：</span>
                  <span>国药准字H20051756</span>
                </p>
                <p>
                  <span>生产企业：</span>
                  <span>施维雅（天津）制药有限公司</span>
                </p>
              </div>
            </div>
            <div class="botinfo">
              <div class="left">
                <img src="./../../assets/info.jpg" alt="">
              </div>
              <div class="right">
                <h3>培哚普利吲达帕胺片</h3>
                <p>
                  <span>药物分类：</span>
                  <span>磺胺药的单方制剂/血管紧张素转化酶抑制剂的单方制剂</span>
                </p>
                <p>
                  <span>功能主治：</span>
                  <span>原发性高血压。本品适用于单独服用培哚普利不能完全控制血压的患者。</span>
                </p>
                <p>
                  <span>用法用量：</span>
                  <span>口服。每日一次，每次服用一片本品，最好在清晨餐前服用。在可能的情况下，建议依据个体情况对用药剂量进行逐步调整。对于适当的临床病例，可以考虑由单药治疗直接转为本品治疗。肾功能不全的患者(见【注意事项】)</span>
                </p>
                <p>
                  <span>不良反应：</span>
                  <span>与本品相关服用培哚普利可抑制肾素-血管紧张素-醛固酮轴而使吲达帕胺所致的失钾减少。服用本品的4%患者出现低钾血症(钾离子水平＜3.4mmol/L)。胃肠道常见(＞1/100，＜1/10)：便秘、口干</span>
                </p>
                <p>
                  <span>批准文号：</span>
                  <span>国药准字H20051756</span>
                </p>
                <p>
                  <span>生产企业：</span>
                  <span>施维雅（天津）制药有限公司</span>
                </p>
              </div>
            </div>
          </div>
        </div>
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
.medicalMain {
  padding: 10px;
}
.medicalMain .search {
  text-align: right;
}
.medicalMain .info {
  text-align: left;
  padding: 10px;
}
.medicalMain .info h2 {
  color: #00a2ff;
  font-weight: normal;
  padding: 0;
  margin: 4px;
  font-size: 20px;
}
.medicalMain .info .line {
  width: 100%;
  height: 1px;
  background-color: #00a2ff;
}
.medicalMain .info .botinfo {
  /* border-bottom: 1px solid #00a2ff; */
}
.medicalMain .info .botinfo .left,
.medicalMain .info .botinfo .right {
  float: left;
  margin-bottom: 20px;
}
.medicalMain .info .botinfo .left {
  width: 20%;
  text-align: center;
}
.medicalMain .info .botinfo .left img {
  width: 150px;
}
.medicalMain .info .botinfo .right {
  width: 80%;
  /* text-align: center; */
}
.medicalMain .info .botinfo .right h3 {
  margin: 0 0 8px 0;
  padding: 0;
  color: #00a2ff;
}
.medicalMain .info .botinfo .right p {
  margin: 8px 0 0 0;
  padding: 0;
}
.medicalMain .info .botinfo .right p span:nth-child(1) {
  color: gray;
}
.medicalMain .info .botinfo .right p span:nth-child(1),
.medicalMain .info .botinfo .right p span:nth-child(2) {
  font-size: 14px;
}
</style>
