import { HeaderComponent } from "./components/header.component.js";
import { NavigationComponent } from "./components/navigation.component.js";
import { PostsComponent } from "./components/posts.component.js";
import { CreateComponent } from "./components/create.component.js";
import { FavoriteComponent } from "./components/favorite.component.js";

new HeaderComponent("header");
const navigation = new NavigationComponent("navigation");
const posts = new PostsComponent("posts");
const create = new CreateComponent("create");
const favorit = new FavoriteComponent("favorite");

navigation.registerTabs([
  { name: "posts", component: posts },
  { name: "create", component: create },
  { name: "favorite", component: favorit },
]);
