jquery-showhide
===============

A simple jQuery show/hide plugin. Assumes your toggle HTML flows as follows:
<ul><li>A component container element - this should contain your visible summary content and detail content which is hidden on page load
<ul><li>A nested summary element. This should have the CSS class .summary</li>
<li>Nested details element. This should have the CSS class .details</ul>
</li></ul>

<h2>Current avaiable Options</h2>
<ul>
<li>openByDefault - boolean, set to false by default</li>
<li>toggleLinkText - Comma separated string. Default value is 'Show more, Show less'</li>
</ul>
<h3>Still to do</h3>
<ul>
<li>Allow for direct linking via hashtag</li>
<li>Option to make the whole summary panel clickable</li>
<li>Allow for nested show/hide panels</li>
<li>Option to specify easing</li>
</ul>
