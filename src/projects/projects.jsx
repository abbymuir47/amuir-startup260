import React from 'react';
import './projects.css';

export function Projects() {
  return (
    <main>
      <table>
          <tr>
              <td>
                  <div id="picture" class="picture-box">
                      <img width="350px" src="images/resin_art.jpg" alt="random" />
                  </div>
                  <p>Resin Art</p>
              </td>
              <td>
                  <div id="picture" class="picture-box">
                      <img width="350px" src="images/checker_bag.jpg" alt="random" />
                  </div>
                  <p>Crochet Purse</p>
              </td>
              <td>
                  <div id="picture" class="picture-box">
                      <img width="350px" src="images/mac_art.jpg" alt="random" />
                  </div>
                  <p>Digital Album Art</p>
              </td>
              <td>
                  <div id="picture" class="picture-box">
                      <img width="350px" src="images/skate_collage.jpg" alt="random" />
                  </div>
                  <p>Collaborative Drawing</p>
              </td>
          </tr>
      </table>
    </main>
  );
}