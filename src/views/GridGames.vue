<template>
  <Grid
    :fetch="parseGames"
    :fetchLink="null"
    :max="24"
    name="Lançamentos"
    :directUrl="true"
  />
</template>

<script>
import Grid from '@/components/Grid'
import parseGames from '@/scripts/games'

export default {
  data() {
    return {
      parseGames: parseGames,
    }
  },
  components: {
    Grid,
  },
}
</script>
