<template>
    <div class="home-header">
        <section class="left">
            <router-link to="/">
                <img src="@/assets/images/text_logo.png" alt="logo">
            </router-link>
        </section>
        <section class="center">
            <ul>
                <li>
                    <router-link to="/invitation">청첩장</router-link>
                </li>
                <li>
                    <router-link to="/invitation">공지사항</router-link>
                </li>
                <li>
                    <router-link to="/invitation">문의사항</router-link>
                </li>
            </ul>
        </section>
        <section class="right">
            <router-link to="/login" class="btn-link">
                <b-button variant="outline-primary">Login</b-button>
            </router-link>
            <router-link to="/signup" class="btn-link">
                <b-button variant="outline-info">Signup</b-button>
            </router-link>
        </section>
    </div>
</template>
<script>
export default {
    name: 'HomeHeader'
}
</script>