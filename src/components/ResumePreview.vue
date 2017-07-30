<template>
  <div id="resume-preview">

    <section class="section-left">
      <header class="profile">
      <div class="left">
        <h1>{{resume.Profile.name}}</h1>
        <h3>求职意向:{{resume.Profile.intention}}</h3>
         <div class="phone">
          <span>电话：</span>
        <span>
          {{resume.Contacts.telephone}}
        </span>
        </div>

          <div class="gender">
            <span>性别:</span>
            <span>{{resume.Profile.sex}}</span>
         </div>


         </div>
         <div class="right">

                <p class="github">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-github"></use>
                  </svg>
                  <span>Github:
                    <a :href="resume.Contacts.github" v-text="resume.Contacts.github"></a>
                  </span>
                </p>
                <p class="blog">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-blog"></use>
                          </svg>
                          <span>Blog:
                            <a :href="resume.Contacts.blog" v-text="resume.Contacts.blog"></a>
                          </span>
                        </p>
                        <p class="email">

                                  <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-email"></use>
                                  </svg>

                                <span>{{resume.Contacts.email}}</span>
                                </p>
              </div>

      </header>
      <div class="edu">
        <h3>教育背景</h3>
        <span>{{resume.Education.school}}:</span>
        <span>{{resume.Education.time}}</span>
      </div>


      <div class="blog">


      </div>
      <div class="work">
        <div class="title">
          <h3>工作经验</h3>
        </div>
        <div class="work-item" v-for="item in resume.Work">
          <ul>
            <li class="item-title">
              <span>{{item.company}}</span>
              <span>{{item.time}}</span>
            </li>
            <li class="content">{{item.details}}</li>
          </ul>
        </div>
      </div>
      <div class="project">
        <div class="title">
          <h3>项目经验</h3>
        </div>
        <div class="project-item" v-for="item in resume.Projects">
          <ul>
            <li class="item-title">
              <span>{{item.project}}</span>
              <span>{{item.time}}</span>
            </li>
            <li class="content">{{item.details}}</li>
          </ul>
        </div>
      </div>
      <div class="skill">
        <div class="title">
          <h3>技能</h3>
        </div>
        <div class="skill-item" v-for="item in resume.Skills">
          <ul>
            <li class="item-title">
              <span>{{item.skill}}</span>
            </li>
            <li class="content">{{item.content}}</li>
          </ul>
        </div>
      </div>
       <div class="hobbies">
              <h3>兴趣爱好</h3>
              <ul class="hobby-item">
                <li v-for="(item,key) in resume.Hobbys">{{item.hobby}}</li>
              </ul>
            </div>
            <div class="self-assessment">
              <h3>自我评价</h3>
              <p>
                {{resume.Profile.assessment}}
              </p>
            </div>
    </section>
  </div>
</template>

<script>
import store from '../store/index'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ResumePreview',
  store,
  computed:{
    ...mapState(['resume'])
  }
}

</script>

<style lang="scss" scoped>
*{
line-height:30px;
font-size:20px;
}
header:after{
content:'';
display:block;
clear:both;
}
h1{
font-size:30px;
}
.email{
margin-top:10px;
}
h3{
margin-top:10px;
color:blue;
}
.left{
float:left;
}
.right{
float:right;
margin-right:30px;
margin-top:30px;
}
span{
text-decoration:none;
}
.github{
margin:10px 0;
}
.phone{
 margin:10px 0;
}
#resume-preview {
  width: 62%;
  background-color: #f5f6f7;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .5);
  overflow: auto;
  display: flex;
      background-color: #ECECEC;


}

.profile {

}

.icon {
  fill: #000;
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
  &::before {
    content: '';
    display: block;
    height: 100%;
  }
}

.personal {
  display: flex;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  >li {
    flex: 1;
  }
}

.edu {
margin-top:20px;
padding-top:10px;
border-top:1px solid #ccc;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
  >h3 {
    font-size: 2rem;
  }
}

.hobbies {

}
.self-assessment{
  h3{
    font-size: 2rem;
  }
  >p{
    text-align: left;
    padding: 1rem;
  }
}
.work,
.project,
.skill {
  padding: .5rem;
      background-color: #f5f6f7;
  .title {

    >h3 {
      font-size: 2rem;
    }
  }
}
.project{
border-top:1px solid #ccc;
}
.skill{
border-top:1px solid #ccc;
}
.item-title {
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  color: #0093ff;
}

.content {
  padding: .5rem;
}
</style>
