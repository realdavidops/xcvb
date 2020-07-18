# xcvb
## a simple startpage.

I wanted a startpage that looked nice and didn't require a ton of resources. I built xcvb to do that.

![xcvb screenshot](/xcvb.png)

### What does xcvb do?

* Serve a startpage
* Serve it fast (447ms load time with weather)
* Serve it small (finished docker image size 8.02MB - 67.30kb total request size)

### What does xcvb not do? 

* Attempt to be `user-friendly`- there are instructions but it was really written for my own use.
* Attempt to handle every edge case a person might come up with.
* Be efficient in the build process 
* Be written by a competent javascript programmer

Don't expect a lot, but if you like it, star it :) 

## Using xcvb - Docker
1. `git clone https://github.com/realdavidops/xcvb`
2. `cd xcvb`
3. `cp example.config.yaml config.yaml`
4. `vi config.yaml` - Edit settings to your preferences.
5. `docker build --no-cache --build-arg owmapp=PUT_YOUR_OWM_API_KEY_HERE .`
6. Run the resulting docker container however you want to.


## OpenWeatherMap Addendum
Weather is off by default because you need a Open Weather Map API key. You can get one from their site, then you can look up your location ID by typing in your city name and grabbing it from the URL bar. Should be a 6-8 digit number like the example config. You can set units to imperial or metric.

TODO: Github Pages with Github Actions
