interface Props {
   name: string
}

const App = ({ name }: Props) => (
  <article>
    <time dateTime="2021-07-06T15:37:40.623Z">July 06, 2021</time>
    <h1>The New Company Transition Trap</h1>
    <p>Some things that happen on your new team when you're insistent in bringing up the past, and ways to avoid them.</p>
    <section className="post__body">
      <p>I moved to working at a new company in March of this year. I was the new person again; that meant adjusting to a new culture and cautiously finding my place in a new organization. It also meant frequently referencing my past experience to figure out how to apply it to my new role. As a result, sometimes I couldn’t resist saying <a href="https://critter.blog/2021/06/15/at-my-last-company/">“at my last company…”</a> and “one thing I’ve seen work before is…“. This is a transition trap.</p>
      <p>We talked about transition traps in a recent book club meeting in our Peopleware group. According to <a href="https://www.amazon.com/dp/B00B6U63ZE">The First 90 Days</a>, when entering a new organization, people must adapt as quickly as possible. Which makes sense; a company hires a person because they trust that they would be able to adjust their experience to fit their situation.</p>
      <blockquote>
      <p>Transition failures happen because new leaders either misunderstand the essential demands of the situation or lack the skill and flexibility to adapt to them.
      <cite>— Michael Watkins, The First 90 Days</cite></p>
      </blockquote>
      <p>When a person explicitly mentions something they did at their last company, it puts a bad taste in the team’s mouth. Here are a few reasons why you shouldn’t do this:</p>
      <ul>
      <li>It makes folks feel like you’re still in the mindset of working for your previous organization and aren’t internalizing your new role.</li>
      <li>Your old team is not your new team. Not everything that worked then will work now.</li>
      <li>Unless you consistently saw benefit over a long period of time, your experience is anecdotal.</li>
      <li>Failure is not necessarily a bad thing. Trying new ways of tackling problems is an excellent way to fail and learn fast.</li>
      <li>There are reasons why you left the last company. Maybe the thing you’re about to suggest actually <em>wasn’t</em> working as well as you thought.</li>
      <li>If you happen to have been in your particular industry longer than others on the team, it can come off as arrogant. (“I’ve been in this industry for X number of years and inherently know better than you.“)</li>
      </ul>
      <p>My point is: it doesn’t matter if something worked at your last company. Put your last company out of your head. Use numbers and facts. <a href="/2021/be-assertive/">Be assertive</a>. Present the idea, then provide proof and a plan to move forward. Learn from your past experience to adapt and sell it to your new team.</p>
      <p>Read this and think about how you feel afterward:</p>
      <p>“At my last job, we used TypeScript for everything and we never had any issues.”</p>
      <p>This has zero substance or explanation about why TypeScript is a good idea. Instead, you can try:</p>
      <p>“We should switch to using TypeScript for our apps moving forward because it will give us the type safety we seek without venturing too far from a language in which we are already fluent. Switching from JS to TS earlier and in small pieces will make the process much less painful in the long run and provide an extra level of integrity in our applications that don’t require explicitly writing extra test cases.”</p>
      <p>If you were hired by a direct competitor, maybe your new team or manager will specifically ask your insight about things you did at your previous company. Otherwise, your new company doesn’t care about your old company.</p>
    </section>
  </article>
)

export default App;
