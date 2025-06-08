---
title: "ORCASat"
date: "2023-09-02"
thumbnail: "/static/images/blog/orcasat.jpg"
brief: >
    Optical Reference Calibration Satellite. A 2U CubeSat designed and built by
    students at the University of Victoria. Launched aboard CRS-26 from Kennedy
    Space Center to the ISS on Nov. 26, 2022, then deployed to low earth orbit
    on Dec. 29, 2022. Atmospheric re-entry completed on July 7, 2023.
layout: templates/project.liquid
---

**Project Website:** [orcasat.ca](https://www.orcasat.ca/)

**Project Videos:**  [youtube.com/@orcasat](https://www.youtube.com/@orcasat/videos)

<iframe width="820" height="461" src="https://www.youtube.com/embed/G63-7mH1iBc" title="WE BUILT A CUBESAT: This is ORCASat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# The <u>O</u>ptical <u>R</u>eference <u>Ca</u>libration <u>Sat</u>ellite
---
<img src="/static/images/blog/orcasat2.jpg" alt="ORCASat" width="{{ site.bodyWidth }}">

ORCASat was a [2U](https://www.nasa.gov/what-are-smallsats-and-cubesats/)
CubeSatellite designed and built by students at the University of Victoria's
[Centre for Aerospace Research](https://www.uvic-cfar.com/) (CfAR).

The satellite was launched aboard SpaceX
[CRS-26](https://en.wikipedia.org/wiki/SpaceX_CRS-26) on November 26th from
Kennedy Space Center. It rendezvoused and docked with the Internation Space
Station on November 27th. That mission delivered ORCASat as cargo to the ISS,
where it was stowed aboard until it was
[deployed](https://www.orcasat.ca/updates/deployment) into low Earth orbit on
December 29th, 2022.

ORCASat remained in orbit performing it's [mission](https://www.orcasat.ca/mission)
until atmosperic drag degraded it's orbit; and it completed atmospheric re-entry
on July 7th, 2023 having spent 195 days in space and completing 2990 orbits of
the Earth.

The purpose of the satellite was to serve as a reference light source of known
luminosty above the majority of Earth's atmosphere. The idea is that ground-based
telescopes can make an observation of the reference source provided by ORCASat
before making an observation of an astronomical body of interest. The]
astronomers can then use the apparent brightness of ORCASat - observed at a
known distance - to calibrate out the effect of attenuation due to the atmosphere.

To accomplish this, ORCASat was fitted with a custom payload featuring two lasers
of precisely known wavelength, an apparatus for accurately measuring the
luminosity of that source on the spacecraft, and an integrating sphere designed
to ensure that the intensity of light would be the same from all viewing angles.

<img src="/static/images/blog/orcasat-payload.jpg" alt="Custom Light Source Payload" width="{{ site.bodyWidth }}">

As ORCASat passed overhead a partner observatory it would activate the light source
and begin taking measurements of the light source's luminosity and the spacecrafts
present position. Then, during a later orbit this time-stamped telemetry would be
transmitted to the
[ground station](https://www.orcasat.ca/updates/ground-station-antenna-installation)
located on the top of UVic's
[Engineering Lab Wing](https://www.uvic.ca/search/maps-buildings/buildings/engineering-lab-wing.php).

The telemetry would later be sent to astronomers at the partner observatory, and
they could work their magic - using our data to help them better interpret their
results.

I played a small part in ORCASats design and construction. I worked on the
project as an undergraduate volunteer part time in between my studies, and
later as a co-op student from May - December, 2021. The project
[team](https://www.orcasat.ca/team) was large and full of many talented people.
I worked on the Telemetry Tracking & Command (TT&C) subsystem under a very
motivated graduate student, responsible for building the RF communications
module that would serve as the only data link between the ground station and
the spacecraft.

<iframe width="{{ site.bodyWidth }}" height="461" src="https://www.youtube.com/embed/A0LK0woRi-s" title="ORCASat Antenna Evolution" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The code that we used to make this work is based on the
[OpenLST](https://github.com/OpenLST/openlst) project developed at
[Planet Labs](https://www.planet.com/). The ORCASat codebase is proprietary and
owned by CfAR, so I can't share the details.

Much of my time was spent testing and integrating the communications subsystem
in a prototype satellite housed in a clean-room in the universities engineering
lab wing, affectionately referred to as
[FlatSat](https://www.orcasat.ca/updates/flatsat-v1). I spent a lot of time
in that room, you can watch myself and others performing some of that testing
in this video:

<iframe width="804" height="452" src="https://www.youtube.com/embed/_z7ZrC2Zlbw" title="ORCASat FlatSat v1 Demo (August 2021)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I learned a lot during my time working on this project; it was my first
large-scale engineering project undertaken in earnest. I'm very glad not to have
introduced a bug in the communications software which would have rendered the 
spacecraft unreachable. You can't exactly plug in a debugger once it's in orbit!

The project is documented in much detail on the website and youtube channel.
If you're curious about anything in particular you can probably find it there.
