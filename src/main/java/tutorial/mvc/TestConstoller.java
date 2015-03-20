package tutorial.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * Created by agilardi on 3/20/15.
 */
public class TestConstoller {

    @RequestMapping("/test")
    public String test() {
        return "view";
    }
}
