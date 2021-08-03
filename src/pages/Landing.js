import classes from '../components/Next.module.css';

function Landing() {
    return (
        <div className={classes.box} id="landing">
            <div className="home">
                <h2>EVO</h2>
                <h3>Events Promotions Reimagined</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloribus obcaecati sunt illum neque deserunt voluptatibus unde adipisci nobis, similique natus a! Quia aliquid dolores voluptatibus maxime odit culpa modi!</p>

                <img src="/assets/nextIcon" alt="" />
            </div>
        </div>
    )
}

export default Landing;