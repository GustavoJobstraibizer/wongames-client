import galleryMock from 'components/Gallery/mock'
import gamesMock from 'components/GameCardSlider/mock'
import gameInfoMock from 'components/GameInfo/mock'
import hightlightMock from 'components/Highlight/mock'
import Game, { GameTemplateProps } from 'templates/Game'

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  const textContent = `
  <a href="https://www.cyberpunk.net/en/news/39092/patch-1-3-list-of-changes"><img src="https://items.gog.com/not_a_cp/1.3patchbox.png"></a><hr><br><img src="https://items.gog.com/not_a_cp/addon_en.png"><hr><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/action.mp4"></video><br><b>Cyberpunk 2077</b> is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character's cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/character.mp4"></video><br>
Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City. Create your character from scratch and choose their background out of three unique Lifepaths. Take the role of a gang-wise Street Kid, freedom-loving Nomad, or a ruthless Corpo.
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/world.mp4"></video><br>
Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth. Explore the bustling megalopolis of the future and its extensive districts, each with exceptional visual flavor, inhabitants and chances to earn cash. Interact with members of  powerful gangs who rule the streets of Night City.
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/tech.mp4"></video><br>
Take the riskiest job of your life and go after a prototype implant that is the key to immortality. Guided by the legendary Rockerboy, Johnny Silverhand (played by Keanu Reeves), you will change the course of the corporate-ruled world forever. All this while listening to an intoxicating soundtrack from artists like Run the Jewels, Refused, Grimes, A$AP Rocky, Gazelle Twin, Ilan Rubin, Richard Devine, Nina Kraviz, Deadly Hunta, Rat Boy, and Tina Guo.
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/music.mp4"></video><br><h4>Game features:</h4><ul><li>Dive into an open-world RPG and explore a futuristic city where anything goes.</li><li>Create a unique character, along with their looks and background. Craft your own destiny by making tough choices as the immersing story follows.</li><li>Utilize a wide arsenal of high-tech weapons against your opponents.</li><li>Drive futuristic vehicles through the city streets or race to earn cash.</li></ul><br><hr><a target="“_blank”" href="https://lp.gog.com/cyberpunk-2077-hub/en"><img alt="" src="https://items.gog.com/not_a_cp/learn_more.png"></a><hr><center><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/awardscp1.png"><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/awardscp2.png"></center><hr>

* Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams is available in English only.


            <p class="description__copyrights">
            CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
respective owners.
        </p>
  `

  return {
    props: {
      cover:
        'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
      gameInfo: gameInfoMock,
      gallery: galleryMock,
      description: textContent,
      details: {
        developer: 'CD PROJECT RED',
        releaseDate: '2019-12-10T21:00:00',
        platforms: ['windows'],
        publisher: 'CD PROJECT RED',
        rating: 'BR18',
        genres: ['Action', 'Role-playing']
      },
      upcomingGames: gamesMock,
      recommendedGames: gamesMock,
      upcomingHighlight: hightlightMock
    }
  }
}
