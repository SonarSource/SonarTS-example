package test.multimodule;

import spark.Spark;

import static spark.Spark.*;

public class Backend {

  public static void main(String[] args) {
    Spark.externalStaticFileLocation(args[0]);
    get("/hello", (req, res) -> "Hello " + req.queryParams("first") + " " + req.queryParams("last"));
  }
}
