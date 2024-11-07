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
                  <p>Like count (Websocket placeholder)</p><button type="submit">Like</button>
                  <p>Comments (Websocket placeholder)</p>
                  <textarea id="inputText" class="content is-medium textarea has-fixed-size textarea is-hovered textarea is-info" placeholder="Leave a comment" rows="1"></textarea><button type="submit">Comment</button>
              </td>
              <td>
                  <div id="picture" class="picture-box">
                      <img width="350px" src="images/checker_bag.jpg" alt="random" />
                  </div>
                  <p>Crochet Purse</p>
                  <p>Like count (Websocket placeholder)</p><button type="submit">Like</button>
                  <p>Comments (Websocket placeholder)</p>
                  <textarea id="inputText" class="content is-medium textarea has-fixed-size textarea is-hovered textarea is-info" placeholder="Leave a comment" rows="1"></textarea><button type="submit">Comment</button>
              </td>
              <td>
                  <div id="picture" class="picture-box">
                      <img width="350px" src="images/mac_art.jpg" alt="random" />
                  </div>
                  <p>Digital Album Art</p>
                  <p>Like count (Websocket placeholder)</p><button type="submit">Like</button>
                  <p>Comments (Websocket placeholder)</p>
                  <textarea id="inputText" class="content is-medium textarea has-fixed-size textarea is-hovered textarea is-info" placeholder="Leave a comment" rows="1"></textarea><button type="submit">Comment</button>
              </td>
              <td>
                  <div id="picture" class="picture-box">
                      <img width="350px" src="images/skate_collage.jpg" alt="random" />
                  </div>
                  <p>Collaborative Drawing</p>
                  <p>Like count (Websocket placeholder)</p><button type="submit">Like</button>
                  <p>Comments (Websocket placeholder)</p>
                  <textarea id="inputText" class="content is-medium textarea has-fixed-size textarea is-hovered textarea is-info" placeholder="Leave a comment" rows="1"></textarea><button type="submit">Comment</button>
              </td>
          </tr>
      </table>
    </main>
  );
}