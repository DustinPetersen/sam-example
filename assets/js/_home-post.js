/*!
  JS group for layout Home or Post
  Chirpy v2.3
https://github.com/DustinPetersen/blog  © 2020 Dustin Petersen
  MIT License
*/

{% include_relative _commons.js %}

{% include_relative _utils/timeago.js %}


{% if site.google_analytics.pv.enabled %}

  {% include_relative _pv-config.js %}

  {% include_relative _utils/pageviews.js %}

  {% include_relative lib/_countUp.min.js %}

{% endif %}
