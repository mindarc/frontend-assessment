<template>
  <div class="container py-5">
    <div class="row pb-5 mb-4">
      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <div class="card rounded shadow-sm border-0">
          <div class="card-body p-4">
            <img src="../assets/400x300.png" alt="" class="img-fluid d-block mx-auto mb-3" />
            <p class="small text-muted font-italic">
              {{ description }}
            </p>
            <div class="text-center">
              <button class="rounded-pill border-2 px-3">
                {{ actionText }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- card 2 -->
      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <div class="card rounded shadow-sm border-0">
          <div class="card-body p-4">
            <img src="../assets/400x300.png" alt="" class="img-fluid d-block mx-auto mb-3" />
            <p class="small text-muted font-italic">
              {{ description }}
            </p>
            <div class="text-center">
              <button class="rounded-pill border-2">
                {{ actionText }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- card 3 -->
      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <div class="card rounded shadow-sm border-0">
          <div class="card-body p-4">
            <img src="../assets/400x300.png" alt="" class="img-fluid d-block mx-auto mb-3" />
            <p class="small text-muted font-italic">
              {{ description }}
            </p>
            <div class="text-center">
              <button class="rounded-pill border-2">
                {{ actionText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Your data properties
    };
  },
  methods: {
    myMethod() {
      // Log something inside a method
      console.log('Logging from myMethod');
    }
  },
  mounted() {
    // Log something in a lifecycle hook
    console.log(this.image);
  }
};
</script>


<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  actionText: {
    type: String,
    required: true
  }
})
</script>

<style scoped></style>
