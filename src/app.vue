<template>
    <div id="app">
        <div class="cover"></div>
        <Header />
        <Todo />
        <Footer />
    </div>
</template>
<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'
export default {
    components:{Header, Footer, Todo}
}
</script>
<style lang="stylus" scoped>
#app
    width 100%
    height 100%
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    .cover
        width 100%
        height 100%
        position:absolute
        left: 0
        right: 0
        top: 0
        bottom: 0
        background-color: #999
        opacity: .5
        z-index: -1

</style>