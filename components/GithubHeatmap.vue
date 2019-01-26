<template>
  <div><slot /></div>
</template>

<script>
import axios from 'axios'

export default {
  mounted () {
    var proxy = 'https://urlreq.appspot.com/req?method=GET&url='

    var url = proxy + 'https://github.com/alfonsobries'

    var colors = {
      'ebedf0': 'github-graph-none',
      'c6e48b': 'github-graph-litte',
      '7bc96f': 'github-graph-some',
      '239a3b': 'github-graph-more',
      '196127': 'github-graph-most'
    }

    axios.get(url)
      .then((response) => {
        return response.data
      })
      .then((body) => {
        var wrapper = document.createElement('div')

        var container = this.$el

        var graph

        var gs

        var fill

        var index

        wrapper.innerHTML = body

        graph = wrapper.querySelector('svg.js-calendar-graph-svg')
        gs = [].slice.call(graph.querySelectorAll('g g'))

        for (var g of gs) {
          index = gs.indexOf(g)

          if (index < 32) {
            g.parentElement.removeChild(g)
          } else {
            g.attributes.transform.value = 'translate(' + (13 * (index - 32)) + ', 0)'
          }
        }

        for (var rect of graph.querySelectorAll('rect')) {
          fill = rect.getAttribute('fill').substring(1)

          if (colors[fill]) {
            rect.classList.add(colors[fill])
          }
        }

        graph.setAttribute('version', '1.1')
        graph.removeAttribute('width')
        graph.removeAttribute('height')
        graph.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        graph.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink')
        graph.setAttribute('xml:space', 'preserve')

        container.innerHTML = graph.outerHTML
      })
  }
}
</script>

<style>
text {
  display: none;
}
.github-graph-none {
  fill: #f1f5f8;
}
.github-graph-litte {
  fill: #b8c2cc;
}
.github-graph-some {
  fill: #8795a1;
}
.github-graph-more {
  fill: #606f7b;
}
.github-graph-most {
  fill: #3d4852;
}
</style>
