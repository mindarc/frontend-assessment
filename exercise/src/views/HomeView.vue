<template>
    <div class="container home">
        <div class="home__title">
            Frontend Assessment
        </div>
        <div class="home__options">
            <div class="home__options__card card bg-success p-2 text-dark bg-opacity-10">
                <span class="home__options__card__span">
                    Go To
                </span>
                <router-link to="/exercise-1" type="button" class="btn btn-outline-success">Exercise 1</router-link>
            </div>
            <div class="home__options__card card bg-success p-2 text-dark bg-opacity-10">
                <span class="home__options__card__span">
                    Go To
                </span>
                <router-link to="/exercise-2" type="button" class="btn btn-outline-success">Exercise 2</router-link>
            </div>
        </div>
        <div class="home__bonus-point">

            <p class="border border-success p-3 bg-success p-2 text-dark bg-opacity-10">
                Explain why the result of <i><b>('b' + 'a' + + 'a' + 'a').toLowerCase()</b></i> is <i><b>banana</b></i>.
                <br><br>
                <i><b>+'a'</b></i> is equal to <i><b>NaN ("Not a Number")</b></i> since it coerces a string to a number, while the character a can't be parsed as a number.
                <br>
                Adding <i><b>NaN</b></i> to <i><b>"ba"</b></i> turns <i><b>NaN</b></i> into a string <i><b>"NaN"</b></i>  due to type conversion, gives <i><b>baNaN</b></i>. And then there is an a behind, giving <i><b>baNaNa</b></i>
                <br>
                And <i><b>.toLowerCase()</b></i> function makes <i><b>baNaNa</b></i> to lower case. And the result will be <i><b>banana</b></i>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

