<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'YdSl719MyC25OzqenFJaDPBT-gzGzoHsz',// your appId
      appKey: 'CgY7BQSYnIb2NUxlwCWcG8ua', // your appKey
      notify:true, 
      verify:false, 
      avatar:'mm', 
      guest_info:['nick'] ,  //评论者只需要提供评论的昵称即可
      placeholder: 'just take easy!' 
    });
  },
}
</script>

